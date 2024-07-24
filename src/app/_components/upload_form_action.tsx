"use server";

export async function upload_form_action(req) {
    console.log("asdf");
    const file = req.get("file");
    const content = await file.arrayBuffer();
    console.log(content);
}
