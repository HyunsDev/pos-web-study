const axios = require('axios')
const fs = require('fs')

const dataFile = `E:\\project\\22_011_pos-web-study\\pos-web-study\\4_board\\backend\\data\\data.json`
const testContent = {
    title: 'test Title',
    content: 'test content'
}
const testContent2 = {
    title: 'test Title2',
    content: 'test content2'
}
let pageId = ''

describe('Web', () => {
    
    beforeAll(() => {
        fs.writeFileSync(dataFile, '{ "post": {} }', 'utf8')
    })

    test('[GET] 비어있음', async () => {
        const res = await axios.get('http://localhost:3000')
        const json = res.data
        expect(json).toEqual({
            post: {}
        })
    })

    test('[POST] 테스트 게시글 추가', async () => {
        const res = await axios.post('http://localhost:3000', testContent)
        expect(res.status).toEqual(200)
        pageId = res.data.id
        const data = fs.readFileSync(dataFile, 'utf8')
        const json = JSON.parse(data)
        expect(json.post[pageId]).toEqual(testContent)
    })

    test('[PATCH] 테스트 게시글 수정', async () => {
        const res = await axios.patch(`http://localhost:3000/${pageId}`, testContent2)
        expect(res.status).toEqual(200)
        const data = fs.readFileSync(dataFile, 'utf8')
        const json = JSON.parse(data)
        expect(json.post[pageId]).toEqual(testContent2)
    })

    test('[DELETE] 테스트 게시글 삭제', async () => {
        const res = await axios.delete(`http://localhost:3000/${pageId}`)
        expect(res.status).toEqual(200)
        const data = fs.readFileSync(dataFile, 'utf8')
        const json = JSON.parse(data)
        expect(json.post[pageId]).toEqual(undefined)
    })
})