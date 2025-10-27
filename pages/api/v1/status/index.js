// /api/status

function status(request, response) {
  response.status(200).json({
    app: "tabnews",
    purpose: "Notice, Information and More",
  });
}

export default status;
