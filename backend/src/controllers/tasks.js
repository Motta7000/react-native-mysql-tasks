import { connect } from '../database'

export const getTasks = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM tasks')
    // console.log(rows)
    res.json(rows)
}
export const getTask = async (req, res) => {
    console.log(req.params.id)
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tasks WHERE id = ?", [req.params.id]);
    // console.log(rows)
    res.json(rows[0])
}


export const getTasksCount = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT COUNT(*) FROM tasks")
   //  console.log(rows)
    res.json(rows[0]["COUNT(*)"])
}

export const saveTask = async (req, res) => {
    const connection = await connect();
    const [result] = await connection.query("INSERT INTO tasks (title,description) VALUES (?,?)", [req.body.title, req.body.description])
   //  console.log(result)
    res.json({ id: result.insertId, ...req.body });
}

export const deleteTask = async (req, res) => {
    console.log(req.params.id)
    const connection = await connect();
    const result = await connection.query("DELETE FROM tasks WHERE id = ?", [req.params.id]);
    // console.log(result)
    res.sendStatus(204)
}

export const updateTask = async (req, res) => {
    const connection = await connect();
    const result = await connection.query("UPDATE tasks SET title = ?, description = ? WHERE id = ?",
     [req.body.title, req.body.description,req.body.id])
   // console.log(result)
    res.json(result)
}