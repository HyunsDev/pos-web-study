

// 상수
const SERVER = 'http://localhost:3000'



// 포스트 정보를 담을 변수
let posts



// 글 목록 불러오기
const request = async () => {

    // API 요청
    const res = await fetch(`${SERVER}`)
    const json = await res.json()


    posts = json.post


    // 글 리스트
    document.querySelector("#posts").innerHTML = ''

    for (let postId in json.post) {

        // 제목
        let title = document.createElement('h3')
        title.append(json.post[postId].title)

        // 내용
        let content = document.createElement('p')
        content.append(json.post[postId].content)

        // 글 아이디
        let label = document.createElement('label')
        label.append(postId)

        // 글 삭제 버튼
        let deleteButton = document.createElement('input')
        deleteButton.type = 'button'
        deleteButton.value = '삭제'
        deleteButton.addEventListener('click', () => deletePost(postId))
        
        // 글 수정 버튼
        let editButton = document.createElement('input')
        editButton.type = 'button'
        editButton.value = '수정'
        editButton.addEventListener('click', () => startEditPost(postId))  

        // 전체
        let element = document.createElement('div')
        element.className = 'post'
        element.append(title)
        element.append(content)
        element.append(label)
        element.append(deleteButton)
        element.append(editButton)

        document.querySelector("#posts").append(element)
    }
}
request()






// 글 작성
const upload = async () => {

    // 제목, 내용 가져오기
    const title = document.querySelector('#title').value
    const content = document.querySelector('#content').value

    // 제목이 없으면 업로드 거부
    if (!title) return

    // API 요청
    await fetch(`${SERVER}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            content: content
        })
    })

    // 입력칸 지우기
    document.querySelector('#title').value = ''
    document.querySelector('#content').value = ''

    // 글 불러오기
    request()
}

// 게시글 올리기 클릭했을 때 upload() 실행
document.querySelector('#uploadButton').addEventListener('click', upload)





// 글 삭제
const deletePost = async (postId) => {

    if (confirm('정말로 삭제하시겠습니까?')) {
        // API 요청
        await fetch(`${SERVER}/${postId}`, {
            method: 'DELETE',
        })
        request()
    }
}



// 글 수정 시작
const startEditPost = async (postId) => {
    document.querySelector('#editForm').style.display = 'block'

    document.querySelector('#edit_id').value = postId
    document.querySelector('#edit_title').value = posts[postId].title
    document.querySelector('#edit_content').value = posts[postId].content
}

// 편집창 숨기기
const hideEdit = () => {
    document.querySelector('#editForm').style.display = 'none'
}


// 글 수정 전송
const editPost = async () => {
    if (confirm('글을 수정하시겠습니까?')) {

        const id = document.querySelector('#edit_id').value
        const title = document.querySelector('#edit_title').value
        const content = document.querySelector('#edit_content').value

        // API 요청
        await fetch(`${SERVER}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                content: content
            })
        })

        // 입력칸 지우기
        document.querySelector('#edit_id').value = ''
        document.querySelector('#edit_title').value = ''
        document.querySelector('#edit_content').value = ''

        hideEdit()
        request()
    }
}

// 게시글 수정 클릭했을 때 editPost() 실행
document.querySelector('#editButton').addEventListener('click', editPost)

// 숨기기 클릭했을 때 hideEdit() 실행
document.querySelector('#hideEditForm').addEventListener('click', hideEdit)

// 처음 시작시 가리기
hideEdit()