USE `cisc3003_team05`;

INSERT INTO meals (slug, name, category, description, price, image_path)
VALUES
    ('hamburger', 'Hamburger', 'Burger', 'Grilled chicken burger with campus special sauce.', 25.00, './assets/images/menu-1.png'),
    ('pizza', 'Pizza', 'Pizza', 'Stone-baked pizza slice with mozzarella and tomato.', 63.00, './assets/images/menu-2.png'),
    ('chicken-wings', 'Baked Chicken Wings', 'Chicken', 'Roasted chicken wings with smoky pepper glaze.', 199.00, './assets/images/menu-3.png'),
    ('seafood-pizza', 'Seafood Pizza', 'Pizza', 'Seafood pizza topped with shrimp, squid, and herbs.', 352.00, './assets/images/menu-4.png')
ON DUPLICATE KEY UPDATE
    name = VALUES(name),
    category = VALUES(category),
    description = VALUES(description),
    price = VALUES(price),
    image_path = VALUES(image_path),
    is_active = 1;

INSERT INTO pickup_slots (slot_value, label, capacity, sort_order)
VALUES
    ('11:30', '11:30 AM', 6, 1),
    ('12:00', '12:00 PM', 8, 2),
    ('12:30', '12:30 PM', 8, 3),
    ('13:00', '1:00 PM', 6, 4),
    ('17:30', '5:30 PM', 5, 5),
    ('18:00', '6:00 PM', 5, 6)
ON DUPLICATE KEY UPDATE
    label = VALUES(label),
    capacity = VALUES(capacity),
    sort_order = VALUES(sort_order);
