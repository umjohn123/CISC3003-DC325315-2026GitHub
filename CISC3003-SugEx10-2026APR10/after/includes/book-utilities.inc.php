<?php

/**
 * 从文本文件读取客户数据
 * 每行格式: id;firstname;lastname;email;university;address;city;state;country;postal;phone;sales
 */
function readCustomers($filename) {
    $customers = [];
    if (!file_exists($filename)) {
        return $customers;
    }
    $lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $data = explode(';', $line);
        if (count($data) >= 12) {
            $id = trim($data[0]);
            $customers[$id] = [
                'id'         => $id,
                'firstname'  => trim($data[1]),
                'lastname'   => trim($data[2]),
                'email'      => trim($data[3]),
                'university' => trim($data[4]),
                'address'    => trim($data[5]),
                'city'       => trim($data[6]),
                'state'      => trim($data[7]),
                'country'    => trim($data[8]),
                'postal'     => trim($data[9]),
                'phone'      => trim($data[10]),
                'sales'      => trim($data[11]) // 逗号分隔的12个数字
            ];
        }
    }
    return $customers;
}

/**
 * 读取指定客户的订单
 * 每行格式: orderId;customerId;isbn;title;category
 */
function readOrders($customerId, $filename) {
    $orders = [];
    if (!file_exists($filename)) {
        return $orders;
    }
    $lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $data = explode(',', $line);
        if (count($data) >= 5) {
            // 关键：trim 去除空格，并将客户ID转为字符串进行比较
            $custId = trim($data[1]);
            if ($custId === (string)$customerId) {
                $orders[] = [
                    'orderId'    => trim($data[0]),
                    'customerId' => $custId,
                    'isbn'       => trim($data[2]),
                    'title'      => trim($data[3]),
                    'category'   => trim($data[4])
                ];
            }
        }
    }
    return $orders;
}

?>