import Mock from 'mockjs'
const hotData=Mock.mock({
    "list|10":[
        {
            "id|+1":1,
            "title":"@title",
            "time":new Date()*1
        }
    ]
})

export default {    
    'GET /api/sudden': Mock.mock({
        "list|10":[
            {
                "id|+1":1,
                title:"@ctitle",
                time:new Date()*1
            }
        ]
    }),
    'GET /api/hot': Mock.mock({
        "list|10":[
            {
                "id|+1":1,
                title:"@title",
                time:new Date()*1
            }
        ]
    }),
    'GET /api/num': Mock.mock({
        "list|5":[
            {
                "id|+1":1,
                "num|+5000":Math.floor(Math.random()*(30000-3000)+ 3000) 
            }
        ]
    })
}