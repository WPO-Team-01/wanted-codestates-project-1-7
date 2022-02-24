const express = require("express");
const bodyParser = require("body-parser");
const { Router } = require("express");
const morgan = require("morgan");

const forms = [
  {
    id: 123,
    title: "예제 폼",
    data: [
      {
        id: "name",
        type: "text",
        required: true,
        label: "이름",
        placeholder: "주민등록상 이름 입력",
      },
      {
        id: "phone",
        type: "phone",
        required: true,
        label: "휴대폰 번호",
      },
      {
        id: "address",
        type: "address",
        required: true,
        label: "배송지",
      },
      {
        id: "input_0",
        type: "select",
        label: "옵션1",
        options: ["S", "L", "XL", "XXL"],
        required: true,
      },
      {
        id: "input_1",
        type: "file",
        label: "첨부파일",
        required: false,
        description: "<p>첨부파일은 위와 같이 입력할 수 있습니다.</p>",
      },
      {
        id: "agreement_0",
        type: "agreement",
        label: "개인정보 수집 약관 동의",
        required: true,
        contents: "<p>(개인정보 수집 및 약관 내용)</p>",
      },
    ],
  },
];

const formResult = {
  123: [
    {
      id: 1234,
      name: "이름이름",
      phone: "000-0000-0000",
      address: "주소주소 주소주소주소",
      input_0: "S",
      input_1: "https://imageurl/88783434.png",
      agreement_0: true,
    },
  ],
};

const apiRouter = Router();

// GET /api/foms
apiRouter.get("/forms", (req, res) => {
  return res.json({
    forms,
  });
});

// POST /api/foms
apiRouter.post("/forms", (req, res) => {
  const { form } = req.body;
  forms.push({ id: Date.now(), ...form });
  return res.json({
    success: true,
  });
});

// GET /api/forms/:id
apiRouter.get("/forms/:id", (req, res) => {
  const { id } = req.params;
  return res.json({
    form: forms.find((form) => form.id === Number(id)),
  });
});

// POST /api/forms/:id/submit
apiRouter.post("/forms/:id/submit", (req, res) => {
  const { id } = req.params;
  const { formData } = req.body;
  if (!formResult[id]) {
    formResult[id] = [];
  }
  formResult[id].push({ id: Date.now(), ...formData });
  return res.json({
    success: true,
  });
});

// GET /api/forms/:id/result
apiRouter.get("/forms/:id/result", (req, res) => {
  const { id } = req.params;
  return res.json({
    formResult: formResult[id],
  });
});

const app = express();
app.use(bodyParser.json());
app.use(morgan("common"));

app.use("/api", apiRouter);
app.listen(8080, () => {
  console.log("server is running");
});
