console.log("comment js is hooked")

const handleCommentSubmit = async (event) => {
    event.preventDefault();
console.log("comment submit button is clicked")
}


document
.querySelector("#comment-button")
.addEventListener("click", handleCommentSubmit)