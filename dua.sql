SELECT 
    a.id, 
    a.name, 
    b.name AS parent_name
FROM 
    m_data AS a
LEFT JOIN 
    m_data AS b ON a.parent_id = b.id
ORDER BY 
    a.id;
