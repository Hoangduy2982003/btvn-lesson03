import express from 'express'

const router = express.Router();

router.use((req , res , next ) => {
    console.log(">>>>>>>>> V1 Middleware");
    next();
})

//sign up , sign in
router.post("/v1/auth/sign-in" , (req , res) => {
    res.end("Đăng nhập");
});

router.post("/v1/auth/sign-up" , (req , res) => {
    res.end("Đăng ký");
});

router.post("/v1/auth/google" , (req , res) => {
    res.end("Đăng nhập bằng google");
});

//articles
router.get("/v1/content/articles" , (req , res) => {
    res.end("Lấy danh sách bài báo");
})

router.post("/v1/content/articles" , (req , res) => {
    res.end("Tạo bài báo");
})

router.get("/v1/content/articles/:id" , (req , res) => {
    const params = req.params;
    const id = params.id;
    res.end("Lấy bài báo số " + id);
})

router.put("/v1/content/articles/:id" , (req , res) => {
    const params = req.params;
    const id = params.id;
    res.end("Cập nhật bài báo số " + id);
})

router.delete("/v1/content/articles/:id" , (req , res) => {
    const params = req.params;
    const id = params.id;
    res.end("Xóa bài báo số " + id);
})

//categories
router.get("/v1/content/categories" , (req , res) => {
    res.end("Lấy danh sách categories");
})

router.post("/v1/ content/categories" , (req , res) => {
    res.end("Tạo categories");
})

router.get("/v1/content/categories/:id" , (req , res) => {
    const params = req.params;
    const id = params.id;
    res.end("Lấy categories số " + id);
})

router.put("/v1/content/categories/:id" , (req , res) => {
    const params = req.params;
    const id = params.id;
    res.end("Cập nhật categories số " + id);
})

router.delete("/v1/content/categories/:id" , (req , res) => {
    const params = req.params;
    const id = params.id;
    res.end("Xóa categories số " + id);
})

//email , sms
router.post("/v1/notify/email" , (req , res) => {
    res.end("Tạo email");
})

router.post("/v1/notify/sms" , (req , res) => {
    res.end("Tạo sms");
})

export default router;