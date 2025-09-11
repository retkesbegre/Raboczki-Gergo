app.get("/regiok", (req, res) => {
    const sql = "SELECT" * FROM `regiok`
    db.query(sql, (err, result)=> {
        if (err) return res.json(err);
        return res.json (result)
    })
})

app.delete("/torles/:id", (req, res)=> {
    const sql = "DELETE FROM `regiok` WHERE Rid = ?";
    db.query(sql, [req.params.id], (err, result)=> {
        if (err) return res.json(err);
        return res.json(result)
    })
})