const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');

require('dotenv').config();

const marathonRoutes = require('./routes/marathons');
const userRoutes = require('./routes/users');

let app = express();

app.set('port', 3012);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/marathons', marathonRoutes);
app.use('/api/users', userRoutes);

mongoose.connect("mongodb://localhost:27017/skimaapi",
    { useNewUrlParser: true},
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Connection succeeded');
        }
    });

app.listen(3012, () => {
    console.log('Express server is running at port : 3012');
});

let db = require('./db');
let marathonsController = require('./controllers/marathons');

let marathon = {
    title: 'Поднимаем сервер на Node.js',
    description: 'Самый лучший марафон',
    sprints: [
        {
            id: 1,
            name: 'Ищем повод для радости',
            description: 'Знаешь ли ты, что вокруг тебя полно интересных вещей, которые заставят тебя улыбнуться? В этом спринте мы научимся искать и находить приятные и необычные мелочи среди, казалось бы, серой бытовухи, чтобы сделать твой день лучше и ярче.',
            tasks: [
                'Улыбнись себе в зеркале как только проснешься',
                'Сосчитай всех белочек, которых ты встретишь за сегодняшний день',
                'Найди облако в форме единорога, если на улице было облачно, а если нет, то найди тень похожей формы',
                'Опиши цвета, которыми было залито небо на закате',
                'Посмотри любимый мультфильм перед сном!'
            ],
        },
        {
            id: 2,
            name: 'Ищем повод для гордости',
            description: 'Каждый день должен проходить так, чтобы тебе было за что себя похвалить, подводя его итоги. Этот спринт посвящен выполнению небольших, но очень-очень важных дел, за которые ты определенно сможешь наградить себя шоколадной медалькой :)',
            tasks: [
                'Распиши свои цели на ближайший день',
                'Выучи 7 новых слов любого иностранного языка',
                'Почитай 30 минут книгу, которую постоянно откладывал',
            ]
        },
        {
            id: 3,
            name: 'Ограждаемся от социальных сетей',
            description: 'Задумывался ли ты, сколько времени в день ты тратишь на то, чтобы просто посёрфить в интернете, не вынося ничего полезного? В этом спринте мы будем учиться контролировать время, проведенное в социальных сетях.',
            tasks: [
                'Не проверяй соц. сети и почту до обеда',
                'Отключи уведомления',
                'Не бери телефон после 22:00',
            ]
        },
        {
            id: 4,
            name: 'Наводим порядок',
            description: 'На твоё настроение и продуктивность влияют не только эмоции, которые приносит текущий день, но и мелочи, которые уже успели стать частью ежедневной рутины, и внимание на которые, казалось бы, ты уже не обращаешь. Давай избавимся от всего лишнего в этом спринте!',
            tasks: [
                'Почисти, наконец, уведомления на почте!',
                'Убери лишние предметы с рабочего стола',
                'Отпишись от лишних групп и профилей в соц. сетях',
            ]
        },
        {
            id: 5,
            name: 'Самоанализ',
            description: 'Здесь будет очень крутое описание!',
            tasks: [
                'Выпиши все свои привычки',
                'Отметь, какие привычки приносят тебе пользу, а от каких ты хотел бы избавиться',
                'Отвечай себе на вопрос “Зачем я это делаю?” после каждого принятого решения',
                'Выпиши свои цели и подумай, что нужно сделать для их осуществления',
            ]
        },
        {
            id: 6,
            name: 'Заряжаемся кислородом',
            description: 'Здесь будет очень крутое описание!',
            tasks: [
                'Погуляй 40 минут',
                'Выйди на учебу / работу раньше обычного, чтобы не спеша пройтись',
                'Пройди 10000 шагов за день',
            ]
        },
        {
            id: 7,
            name: 'Контролируем свои финансы',
            description: 'Здесь будет очень крутое описание!',
            tasks: [
                'Взвешивай необходимость каждой покупки',
                'Записывай свою каждую покупку и ее стоимость',
                'Запиши все “за” и “против” каждой покупки',
                'Установи и придерживайся максимальной суммы, которую ты планируешь потратить за сегодня'
            ]
        },
    ],
};

app.get('/', function (req, res) {
    res.send('Hello API');
});

// app.get('/api/marathons', marathonsController.getAll);
//
// app.get('api/marathons/:id', marathonsController.findById);
//
// app.get('/api/marathon', function (req, res) {
//     res.set('Content-Type', 'application/json');
//     res.json(marathon);
// });
//
// app.post('/api/marathons', marathonsController.create);

// app.put('/api/marathons/:id', function (request, response) {
//     db.get().collection('marathons').updateOne(
//         { _id: ObjectID(request.params.id) },
//         { title: request.body.title },
//         { description: request.body.description },
//         { sprints: request.body.sprints },
//         function(err, result) {
//             if (err) {
//                 console.log(err);
//                 return response.sendStatus(500);
//             }
//             response.sendStatus(200);
//         }
//     )
// });

// MongoClient.connect('mongodb://127.0.0.1:27017/', function (err) {
//     if (err) {
//         return console.log(err);
//     }
//     app.listen(3012, function () {
//         console.log("Server is running");
//     });
// });

// db.connect('mongodb://127.0.0.1:27017/', function (err) {
//     if (err) {
//         return console.log(err);
//     }
//     // http.createServer(app).listen(app.get('port'), function () {
//     //     console.log("Server is running");
//     // });
//     app.listen(3012, function () {
//         console.log("Server is running");
//     });
// });

// MongoClient.connect('mongodb://localhost:27017/skimaapi', { useNewUrlParser: true }, function (err, database) {
//     if (err) {
//         return console.log(err);
//     }
//     db = database;
//     app.listen(3012, function () {
//         console.log("Server is running");
//     });
// });