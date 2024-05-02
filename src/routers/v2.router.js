import express from 'express'

const router = express.Router();

router.post("/v2/auth/login" , (req , res) =>{
    res.end("Tạo danh sách login");
})
router.post("/v2/auth/register" , (req , res) =>{
    res.end("Tạo danh sách login");
})

router.get("/v2/content/articles/list" , (req , res) =>{
    res.end("Lấy danh sách articles");
})
router.post("/v2/content/articles/new" , (req, res) =>{
    res.end("Post bài báo mới");
})
router.get("/v2/content/articles/:id/detail" , (req , res) =>{
    const params = req.params;
    const id = params.id;
    res.end("Lấy articles số " + id);
})
router.put("/v2/content/articles/:id/edit" , (req , res) =>{
    const params = req.params;
    const id = params.id;
    res.end("Update articles số " + id);
})
router.delete("/v2/content/articles/:id/delete" , (req , res) =>{
    const params = req.params;
    const id = params.id;
    res.end("Delete articles số " + id);
})

export default router;