INSERT INTO karmaboard_category_boards
(id, user_id, category_id, board_id, create_at, update_at, sort_order, hidden)
VALUES
('id-1', 'user-id-1', 'category-id-1', 'board-id-1', 1672889246832, 1672889246832, 0, false),
('id-2', 'user-id-1', 'category-id-2', 'board-id-2', 1672889246832, 1672889246832, 0, false),
('id-3', 'user-id-2', 'category-id-3', 'board-id-3', 1672889246832, 1672889246832, 0, false),
('id-4', 'user-id-2', 'category-id-3', 'board-id-4', 1672889246832, 1672889246832, 0, false),
('id-5', 'user-id-3', 'category-id-4', 'board-id-5', 1672889246832, 1672889246832, 0, false);

INSERT INTO Preferences VALUES
('user-id-1', 'karmaboard', 'hiddenBoardIDs', '["board-id-1"]'),
('user-id-2', 'karmaboard', 'hiddenBoardIDs', '["board-id-3", "board-id-4"]');
