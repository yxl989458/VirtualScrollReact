import { GET, POST, POSTRESPONSE } from "@/services";
import { v4 } from "uuid";
import { describe, expect, it } from "vitest";

describe("fetch", () => {
    it("fetch GET test ", async () => {
        const res = await GET("http://jsonplaceholder.typicode.com/posts", {
            name:'test'
        })
        expect(res).toMatchInlineSnapshot(`
          [
            {
              "body": "quia et suscipit
          suscipit recusandae consequuntur expedita et cum
          reprehenderit molestiae ut ut quas totam
          nostrum rerum est autem sunt rem eveniet architecto",
              "id": 1,
              "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
              "userId": 1,
            },
            {
              "body": "est rerum tempore vitae
          sequi sint nihil reprehenderit dolor beatae ea dolores neque
          fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis
          qui aperiam non debitis possimus qui neque nisi nulla",
              "id": 2,
              "title": "qui est esse",
              "userId": 1,
            },
            {
              "body": "et iusto sed quo iure
          voluptatem occaecati omnis eligendi aut ad
          voluptatem doloribus vel accusantium quis pariatur
          molestiae porro eius odio et labore et velit aut",
              "id": 3,
              "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
              "userId": 1,
            },
            {
              "body": "ullam et saepe reiciendis voluptatem adipisci
          sit amet autem assumenda provident rerum culpa
          quis hic commodi nesciunt rem tenetur doloremque ipsam iure
          quis sunt voluptatem rerum illo velit",
              "id": 4,
              "title": "eum et est occaecati",
              "userId": 1,
            },
            {
              "body": "repudiandae veniam quaerat sunt sed
          alias aut fugiat sit autem sed est
          voluptatem omnis possimus esse voluptatibus quis
          est aut tenetur dolor neque",
              "id": 5,
              "title": "nesciunt quas odio",
              "userId": 1,
            },
            {
              "body": "ut aspernatur corporis harum nihil quis provident sequi
          mollitia nobis aliquid molestiae
          perspiciatis et ea nemo ab reprehenderit accusantium quas
          voluptate dolores velit et doloremque molestiae",
              "id": 6,
              "title": "dolorem eum magni eos aperiam quia",
              "userId": 1,
            },
            {
              "body": "dolore placeat quibusdam ea quo vitae
          magni quis enim qui quis quo nemo aut saepe
          quidem repellat excepturi ut quia
          sunt ut sequi eos ea sed quas",
              "id": 7,
              "title": "magnam facilis autem",
              "userId": 1,
            },
            {
              "body": "dignissimos aperiam dolorem qui eum
          facilis quibusdam animi sint suscipit qui sint possimus cum
          quaerat magni maiores excepturi
          ipsam ut commodi dolor voluptatum modi aut vitae",
              "id": 8,
              "title": "dolorem dolore est ipsam",
              "userId": 1,
            },
            {
              "body": "consectetur animi nesciunt iure dolore
          enim quia ad
          veniam autem ut quam aut nobis
          et est aut quod aut provident voluptas autem voluptas",
              "id": 9,
              "title": "nesciunt iure omnis dolorem tempora et accusantium",
              "userId": 1,
            },
            {
              "body": "quo et expedita modi cum officia vel magni
          doloribus qui repudiandae
          vero nisi sit
          quos veniam quod sed accusamus veritatis error",
              "id": 10,
              "title": "optio molestias id quia eum",
              "userId": 1,
            },
            {
              "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus
          accusamus in eum beatae sit
          vel qui neque voluptates ut commodi qui incidunt
          ut animi commodi",
              "id": 11,
              "title": "et ea vero quia laudantium autem",
              "userId": 2,
            },
            {
              "body": "itaque id aut magnam
          praesentium quia et ea odit et ea voluptas et
          sapiente quia nihil amet occaecati quia id voluptatem
          incidunt ea est distinctio odio",
              "id": 12,
              "title": "in quibusdam tempore odit est dolorem",
              "userId": 2,
            },
            {
              "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque
          iste corrupti reiciendis voluptatem eius rerum
          sit cumque quod eligendi laborum minima
          perferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
              "id": 13,
              "title": "dolorum ut in voluptas mollitia et saepe quo animi",
              "userId": 2,
            },
            {
              "body": "fuga et accusamus dolorum perferendis illo voluptas
          non doloremque neque facere
          ad qui dolorum molestiae beatae
          sed aut voluptas totam sit illum",
              "id": 14,
              "title": "voluptatem eligendi optio",
              "userId": 2,
            },
            {
              "body": "reprehenderit quos placeat
          velit minima officia dolores impedit repudiandae molestiae nam
          voluptas recusandae quis delectus
          officiis harum fugiat vitae",
              "id": 15,
              "title": "eveniet quod temporibus",
              "userId": 2,
            },
            {
              "body": "suscipit nam nisi quo aperiam aut
          asperiores eos fugit maiores voluptatibus quia
          voluptatem quis ullam qui in alias quia est
          consequatur magni mollitia accusamus ea nisi voluptate dicta",
              "id": 16,
              "title": "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
              "userId": 2,
            },
            {
              "body": "eos voluptas et aut odit natus earum
          aspernatur fuga molestiae ullam
          deserunt ratione qui eos
          qui nihil ratione nemo velit ut aut id quo",
              "id": 17,
              "title": "fugit voluptas sed molestias voluptatem provident",
              "userId": 2,
            },
            {
              "body": "eveniet quo quis
          laborum totam consequatur non dolor
          ut et est repudiandae
          est voluptatem vel debitis et magnam",
              "id": 18,
              "title": "voluptate et itaque vero tempora molestiae",
              "userId": 2,
            },
            {
              "body": "illum quis cupiditate provident sit magnam
          ea sed aut omnis
          veniam maiores ullam consequatur atque
          adipisci quo iste expedita sit quos voluptas",
              "id": 19,
              "title": "adipisci placeat illum aut reiciendis qui",
              "userId": 2,
            },
            {
              "body": "qui consequuntur ducimus possimus quisquam amet similique
          suscipit porro ipsam amet
          eos veritatis officiis exercitationem vel fugit aut necessitatibus totam
          omnis rerum consequatur expedita quidem cumque explicabo",
              "id": 20,
              "title": "doloribus ad provident suscipit at",
              "userId": 2,
            },
            {
              "body": "repellat aliquid praesentium dolorem quo
          sed totam minus non itaque
          nihil labore molestiae sunt dolor eveniet hic recusandae veniam
          tempora et tenetur expedita sunt",
              "id": 21,
              "title": "asperiores ea ipsam voluptatibus modi minima quia sint",
              "userId": 3,
            },
            {
              "body": "eos qui et ipsum ipsam suscipit aut
          sed omnis non odio
          expedita earum mollitia molestiae aut atque rem suscipit
          nam impedit esse",
              "id": 22,
              "title": "dolor sint quo a velit explicabo quia nam",
              "userId": 3,
            },
            {
              "body": "veritatis unde neque eligendi
          quae quod architecto quo neque vitae
          est illo sit tempora doloremque fugit quod
          et et vel beatae sequi ullam sed tenetur perspiciatis",
              "id": 23,
              "title": "maxime id vitae nihil numquam",
              "userId": 3,
            },
            {
              "body": "enim et ex nulla
          omnis voluptas quia qui
          voluptatem consequatur numquam aliquam sunt
          totam recusandae id dignissimos aut sed asperiores deserunt",
              "id": 24,
              "title": "autem hic labore sunt dolores incidunt",
              "userId": 3,
            },
            {
              "body": "ullam consequatur ut
          omnis quis sit vel consequuntur
          ipsa eligendi ipsum molestiae et omnis error nostrum
          molestiae illo tempore quia et distinctio",
              "id": 25,
              "title": "rem alias distinctio quo quis",
              "userId": 3,
            },
            {
              "body": "similique esse doloribus nihil accusamus
          omnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus
          perspiciatis cum ut laudantium
          omnis aut molestiae vel vero",
              "id": 26,
              "title": "est et quae odit qui non",
              "userId": 3,
            },
            {
              "body": "eum sed dolores ipsam sint possimus debitis occaecati
          debitis qui qui et
          ut placeat enim earum aut odit facilis
          consequatur suscipit necessitatibus rerum sed inventore temporibus consequatur",
              "id": 27,
              "title": "quasi id et eos tenetur aut quo autem",
              "userId": 3,
            },
            {
              "body": "non et quaerat ex quae ad maiores
          maiores recusandae totam aut blanditiis mollitia quas illo
          ut voluptatibus voluptatem
          similique nostrum eum",
              "id": 28,
              "title": "delectus ullam et corporis nulla voluptas sequi",
              "userId": 3,
            },
            {
              "body": "odit magnam ut saepe sed non qui
          tempora atque nihil
          accusamus illum doloribus illo dolor
          eligendi repudiandae odit magni similique sed cum maiores",
              "id": 29,
              "title": "iusto eius quod necessitatibus culpa ea",
              "userId": 3,
            },
            {
              "body": "alias dolor cumque
          impedit blanditiis non eveniet odio maxime
          blanditiis amet eius quis tempora quia autem rem
          a provident perspiciatis quia",
              "id": 30,
              "title": "a quo magni similique perferendis",
              "userId": 3,
            },
            {
              "body": "debitis eius sed quibusdam non quis consectetur vitae
          impedit ut qui consequatur sed aut in
          quidem sit nostrum et maiores adipisci atque
          quaerat voluptatem adipisci repudiandae",
              "id": 31,
              "title": "ullam ut quidem id aut vel consequuntur",
              "userId": 4,
            },
            {
              "body": "deserunt eos nobis asperiores et hic
          est debitis repellat molestiae optio
          nihil ratione ut eos beatae quibusdam distinctio maiores
          earum voluptates et aut adipisci ea maiores voluptas maxime",
              "id": 32,
              "title": "doloremque illum aliquid sunt",
              "userId": 4,
            },
            {
              "body": "rerum ut et numquam laborum odit est sit
          id qui sint in
          quasi tenetur tempore aperiam et quaerat qui in
          rerum officiis sequi cumque quod",
              "id": 33,
              "title": "qui explicabo molestiae dolorem",
              "userId": 4,
            },
            {
              "body": "ea velit perferendis earum ut voluptatem voluptate itaque iusto
          totam pariatur in
          nemo voluptatem voluptatem autem magni tempora minima in
          est distinctio qui assumenda accusamus dignissimos officia nesciunt nobis",
              "id": 34,
              "title": "magnam ut rerum iure",
              "userId": 4,
            },
            {
              "body": "nisi error delectus possimus ut eligendi vitae
          placeat eos harum cupiditate facilis reprehenderit voluptatem beatae
          modi ducimus quo illum voluptas eligendi
          et nobis quia fugit",
              "id": 35,
              "title": "id nihil consequatur molestias animi provident",
              "userId": 4,
            },
            {
              "body": "ad mollitia et omnis minus architecto odit
          voluptas doloremque maxime aut non ipsa qui alias veniam
          blanditiis culpa aut quia nihil cumque facere et occaecati
          qui aspernatur quia eaque ut aperiam inventore",
              "id": 36,
              "title": "fuga nam accusamus voluptas reiciendis itaque",
              "userId": 4,
            },
            {
              "body": "debitis et eaque non officia sed nesciunt pariatur vel
          voluptatem iste vero et ea
          numquam aut expedita ipsum nulla in
          voluptates omnis consequatur aut enim officiis in quam qui",
              "id": 37,
              "title": "provident vel ut sit ratione est",
              "userId": 4,
            },
            {
              "body": "animi esse sit aut sit nesciunt assumenda eum voluptas
          quia voluptatibus provident quia necessitatibus ea
          rerum repudiandae quia voluptatem delectus fugit aut id quia
          ratione optio eos iusto veniam iure",
              "id": 38,
              "title": "explicabo et eos deleniti nostrum ab id repellendus",
              "userId": 4,
            },
            {
              "body": "corporis rerum ducimus vel eum accusantium
          maxime aspernatur a porro possimus iste omnis
          est in deleniti asperiores fuga aut
          voluptas sapiente vel dolore minus voluptatem incidunt ex",
              "id": 39,
              "title": "eos dolorem iste accusantium est eaque quam",
              "userId": 4,
            },
            {
              "body": "ut voluptatum aliquid illo tenetur nemo sequi quo facilis
          ipsum rem optio mollitia quas
          voluptatem eum voluptas qui
          unde omnis voluptatem iure quasi maxime voluptas nam",
              "id": 40,
              "title": "enim quo cumque",
              "userId": 4,
            },
            {
              "body": "molestias id nostrum
          excepturi molestiae dolore omnis repellendus quaerat saepe
          consectetur iste quaerat tenetur asperiores accusamus ex ut
          nam quidem est ducimus sunt debitis saepe",
              "id": 41,
              "title": "non est facere",
              "userId": 5,
            },
            {
              "body": "odio fugit voluptatum ducimus earum autem est incidunt voluptatem
          odit reiciendis aliquam sunt sequi nulla dolorem
          non facere repellendus voluptates quia
          ratione harum vitae ut",
              "id": 42,
              "title": "commodi ullam sint et excepturi error explicabo praesentium voluptas",
              "userId": 5,
            },
            {
              "body": "similique fugit est
          illum et dolorum harum et voluptate eaque quidem
          exercitationem quos nam commodi possimus cum odio nihil nulla
          dolorum exercitationem magnam ex et a et distinctio debitis",
              "id": 43,
              "title": "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
              "userId": 5,
            },
            {
              "body": "temporibus est consectetur dolore
          et libero debitis vel velit laboriosam quia
          ipsum quibusdam qui itaque fuga rem aut
          ea et iure quam sed maxime ut distinctio quae",
              "id": 44,
              "title": "optio dolor molestias sit",
              "userId": 5,
            },
            {
              "body": "est natus reiciendis nihil possimus aut provident
          ex et dolor
          repellat pariatur est
          nobis rerum repellendus dolorem autem",
              "id": 45,
              "title": "ut numquam possimus omnis eius suscipit laudantium iure",
              "userId": 5,
            },
            {
              "body": "voluptatem quisquam iste
          voluptatibus natus officiis facilis dolorem
          quis quas ipsam
          vel et voluptatum in aliquid",
              "id": 46,
              "title": "aut quo modi neque nostrum ducimus",
              "userId": 5,
            },
            {
              "body": "voluptatem assumenda ut qui ut cupiditate aut impedit veniam
          occaecati nemo illum voluptatem laudantium
          molestiae beatae rerum ea iure soluta nostrum
          eligendi et voluptate",
              "id": 47,
              "title": "quibusdam cumque rem aut deserunt",
              "userId": 5,
            },
            {
              "body": "voluptates quo voluptatem facilis iure occaecati
          vel assumenda rerum officia et
          illum perspiciatis ab deleniti
          laudantium repellat ad ut et autem reprehenderit",
              "id": 48,
              "title": "ut voluptatem illum ea doloribus itaque eos",
              "userId": 5,
            },
            {
              "body": "inventore ab sint
          natus fugit id nulla sequi architecto nihil quaerat
          eos tenetur in in eum veritatis non
          quibusdam officiis aspernatur cumque aut commodi aut",
              "id": 49,
              "title": "laborum non sunt aut ut assumenda perspiciatis voluptas",
              "userId": 5,
            },
            {
              "body": "error suscipit maxime adipisci consequuntur recusandae
          voluptas eligendi et est et voluptates
          quia distinctio ab amet quaerat molestiae et vitae
          adipisci impedit sequi nesciunt quis consectetur",
              "id": 50,
              "title": "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
              "userId": 5,
            },
            {
              "body": "sunt dolores aut doloribus
          dolore doloribus voluptates tempora et
          doloremque et quo
          cum asperiores sit consectetur dolorem",
              "id": 51,
              "title": "soluta aliquam aperiam consequatur illo quis voluptas",
              "userId": 6,
            },
            {
              "body": "iusto est quibusdam fuga quas quaerat molestias
          a enim ut sit accusamus enim
          temporibus iusto accusantium provident architecto
          soluta esse reprehenderit qui laborum",
              "id": 52,
              "title": "qui enim et consequuntur quia animi quis voluptate quibusdam",
              "userId": 6,
            },
            {
              "body": "minima harum praesentium eum rerum illo dolore
          quasi exercitationem rerum nam
          porro quis neque quo
          consequatur minus dolor quidem veritatis sunt non explicabo similique",
              "id": 53,
              "title": "ut quo aut ducimus alias",
              "userId": 6,
            },
            {
              "body": "totam corporis dignissimos
          vitae dolorem ut occaecati accusamus
          ex velit deserunt
          et exercitationem vero incidunt corrupti mollitia",
              "id": 54,
              "title": "sit asperiores ipsam eveniet odio non quia",
              "userId": 6,
            },
            {
              "body": "debitis excepturi ea perferendis harum libero optio
          eos accusamus cum fuga ut sapiente repudiandae
          et ut incidunt omnis molestiae
          nihil ut eum odit",
              "id": 55,
              "title": "sit vel voluptatem et non libero",
              "userId": 6,
            },
            {
              "body": "aut est omnis dolores
          neque rerum quod ea rerum velit pariatur beatae excepturi
          et provident voluptas corrupti
          corporis harum reprehenderit dolores eligendi",
              "id": 56,
              "title": "qui et at rerum necessitatibus",
              "userId": 6,
            },
            {
              "body": "at pariatur consequuntur earum quidem
          quo est laudantium soluta voluptatem
          qui ullam et est
          et cum voluptas voluptatum repellat est",
              "id": 57,
              "title": "sed ab est est",
              "userId": 6,
            },
            {
              "body": "veniam voluptatum quae adipisci id
          et id quia eos ad et dolorem
          aliquam quo nisi sunt eos impedit error
          ad similique veniam",
              "id": 58,
              "title": "voluptatum itaque dolores nisi et quasi",
              "userId": 6,
            },
            {
              "body": "perspiciatis et quam ea autem temporibus non voluptatibus qui
          beatae a earum officia nesciunt dolores suscipit voluptas et
          animi doloribus cum rerum quas et magni
          et hic ut ut commodi expedita sunt",
              "id": 59,
              "title": "qui commodi dolor at maiores et quis id accusantium",
              "userId": 6,
            },
            {
              "body": "asperiores sunt ab assumenda cumque modi velit
          qui esse omnis
          voluptate et fuga perferendis voluptas
          illo ratione amet aut et omnis",
              "id": 60,
              "title": "consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere",
              "userId": 6,
            },
            {
              "body": "ab nemo optio odio
          delectus tenetur corporis similique nobis repellendus rerum omnis facilis
          vero blanditiis debitis in nesciunt doloribus dicta dolores
          magnam minus velit",
              "id": 61,
              "title": "voluptatem doloribus consectetur est ut ducimus",
              "userId": 7,
            },
            {
              "body": "enim aspernatur illo distinctio quae praesentium
          beatae alias amet delectus qui voluptate distinctio
          odit sint accusantium autem omnis
          quo molestiae omnis ea eveniet optio",
              "id": 62,
              "title": "beatae enim quia vel",
              "userId": 7,
            },
            {
              "body": "enim adipisci aspernatur nemo
          numquam omnis facere dolorem dolor ex quis temporibus incidunt
          ab delectus culpa quo reprehenderit blanditiis asperiores
          accusantium ut quam in voluptatibus voluptas ipsam dicta",
              "id": 63,
              "title": "voluptas blanditiis repellendus animi ducimus error sapiente et suscipit",
              "userId": 7,
            },
            {
              "body": "id velit blanditiis
          eum ea voluptatem
          molestiae sint occaecati est eos perspiciatis
          incidunt a error provident eaque aut aut qui",
              "id": 64,
              "title": "et fugit quas eum in in aperiam quod",
              "userId": 7,
            },
            {
              "body": "voluptatibus ex esse
          sint explicabo est aliquid cumque adipisci fuga repellat labore
          molestiae corrupti ex saepe at asperiores et perferendis
          natus id esse incidunt pariatur",
              "id": 65,
              "title": "consequatur id enim sunt et et",
              "userId": 7,
            },
            {
              "body": "officia veritatis tenetur vero qui itaque
          sint non ratione
          sed et ut asperiores iusto eos molestiae nostrum
          veritatis quibusdam et nemo iusto saepe",
              "id": 66,
              "title": "repudiandae ea animi iusto",
              "userId": 7,
            },
            {
              "body": "reprehenderit id nostrum
          voluptas doloremque pariatur sint et accusantium quia quod aspernatur
          et fugiat amet
          non sapiente et consequatur necessitatibus molestiae",
              "id": 67,
              "title": "aliquid eos sed fuga est maxime repellendus",
              "userId": 7,
            },
            {
              "body": "magnam molestiae perferendis quisquam
          qui cum reiciendis
          quaerat animi amet hic inventore
          ea quia deleniti quidem saepe porro velit",
              "id": 68,
              "title": "odio quis facere architecto reiciendis optio",
              "userId": 7,
            },
            {
              "body": "officiis error culpa consequatur modi asperiores et
          dolorum assumenda voluptas et vel qui aut vel rerum
          voluptatum quisquam perspiciatis quia rerum consequatur totam quas
          sequi commodi repudiandae asperiores et saepe a",
              "id": 69,
              "title": "fugiat quod pariatur odit minima",
              "userId": 7,
            },
            {
              "body": "sunt repellendus quae
          est asperiores aut deleniti esse accusamus repellendus quia aut
          quia dolorem unde
          eum tempora esse dolore",
              "id": 70,
              "title": "voluptatem laborum magni",
              "userId": 7,
            },
            {
              "body": "occaecati a doloribus
          iste saepe consectetur placeat eum voluptate dolorem et
          qui quo quia voluptas
          rerum ut id enim velit est perferendis",
              "id": 71,
              "title": "et iusto veniam et illum aut fuga",
              "userId": 8,
            },
            {
              "body": "quam occaecati qui deleniti consectetur
          consequatur aut facere quas exercitationem aliquam hic voluptas
          neque id sunt ut aut accusamus
          sunt consectetur expedita inventore velit",
              "id": 72,
              "title": "sint hic doloribus consequatur eos non id",
              "userId": 8,
            },
            {
              "body": "voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabo
          aut eum minima consequatur
          tempore cumque quae est et
          et in consequuntur voluptatem voluptates aut",
              "id": 73,
              "title": "consequuntur deleniti eos quia temporibus ab aliquid at",
              "userId": 8,
            },
            {
              "body": "odit qui et et necessitatibus sint veniam
          mollitia amet doloremque molestiae commodi similique magnam et quam
          blanditiis est itaque
          quo et tenetur ratione occaecati molestiae tempora",
              "id": 74,
              "title": "enim unde ratione doloribus quas enim ut sit sapiente",
              "userId": 8,
            },
            {
              "body": "commodi non non omnis et voluptas sit
          autem aut nobis magnam et sapiente voluptatem
          et laborum repellat qui delectus facilis temporibus
          rerum amet et nemo voluptate expedita adipisci error dolorem",
              "id": 75,
              "title": "dignissimos eum dolor ut enim et delectus in",
              "userId": 8,
            },
            {
              "body": "ut animi facere
          totam iusto tempore
          molestiae eum aut et dolorem aperiam
          quaerat recusandae totam odio",
              "id": 76,
              "title": "doloremque officiis ad et non perferendis",
              "userId": 8,
            },
            {
              "body": "modi ut in nulla repudiandae dolorum nostrum eos
          aut consequatur omnis
          ut incidunt est omnis iste et quam
          voluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident",
              "id": 77,
              "title": "necessitatibus quasi exercitationem odio",
              "userId": 8,
            },
            {
              "body": "nobis facilis odit tempore cupiditate quia
          assumenda doloribus rerum qui ea
          illum et qui totam
          aut veniam repellendus",
              "id": 78,
              "title": "quam voluptatibus rerum veritatis",
              "userId": 8,
            },
            {
              "body": "libero accusantium et et facere incidunt sit dolorem
          non excepturi qui quia sed laudantium
          quisquam molestiae ducimus est
          officiis esse molestiae iste et quos",
              "id": 79,
              "title": "pariatur consequatur quia magnam autem omnis non amet",
              "userId": 8,
            },
            {
              "body": "ex quod dolorem ea eum iure qui provident amet
          quia qui facere excepturi et repudiandae
          asperiores molestias provident
          minus incidunt vero fugit rerum sint sunt excepturi provident",
              "id": 80,
              "title": "labore in ex et explicabo corporis aut quas",
              "userId": 8,
            },
            {
              "body": "facere qui nesciunt est voluptatum voluptatem nisi
          sequi eligendi necessitatibus ea at rerum itaque
          harum non ratione velit laboriosam quis consequuntur
          ex officiis minima doloremque voluptas ut aut",
              "id": 81,
              "title": "tempora rem veritatis voluptas quo dolores vero",
              "userId": 9,
            },
            {
              "body": "ut libero sit aut totam inventore sunt
          porro sint qui sunt molestiae
          consequatur cupiditate qui iste ducimus adipisci
          dolor enim assumenda soluta laboriosam amet iste delectus hic",
              "id": 82,
              "title": "laudantium voluptate suscipit sunt enim enim",
              "userId": 9,
            },
            {
              "body": "est molestiae facilis quis tempora numquam nihil qui
          voluptate sapiente consequatur est qui
          necessitatibus autem aut ipsa aperiam modi dolore numquam
          reprehenderit eius rem quibusdam",
              "id": 83,
              "title": "odit et voluptates doloribus alias odio et",
              "userId": 9,
            },
            {
              "body": "sint molestiae magni a et quos
          eaque et quasi
          ut rerum debitis similique veniam
          recusandae dignissimos dolor incidunt consequatur odio",
              "id": 84,
              "title": "optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut",
              "userId": 9,
            },
            {
              "body": "similique sed nisi voluptas iusto omnis
          mollitia et quo
          assumenda suscipit officia magnam sint sed tempora
          enim provident pariatur praesentium atque animi amet ratione",
              "id": 85,
              "title": "dolore veritatis porro provident adipisci blanditiis et sunt",
              "userId": 9,
            },
            {
              "body": "quasi excepturi consequatur iste autem temporibus sed molestiae beatae
          et quaerat et esse ut
          voluptatem occaecati et vel explicabo autem
          asperiores pariatur deserunt optio",
              "id": 86,
              "title": "placeat quia et porro iste",
              "userId": 9,
            },
            {
              "body": "eos et molestiae
          nesciunt ut a
          dolores perspiciatis repellendus repellat aliquid
          magnam sint rem ipsum est",
              "id": 87,
              "title": "nostrum quis quasi placeat",
              "userId": 9,
            },
            {
              "body": "consequatur omnis est praesentium
          ducimus non iste
          neque hic deserunt
          voluptatibus veniam cum et rerum sed",
              "id": 88,
              "title": "sapiente omnis fugit eos",
              "userId": 9,
            },
            {
              "body": "repellat aut aperiam totam temporibus autem et
          architecto magnam ut
          consequatur qui cupiditate rerum quia soluta dignissimos nihil iure
          tempore quas est",
              "id": 89,
              "title": "sint soluta et vel magnam aut ut sed qui",
              "userId": 9,
            },
            {
              "body": "minus omnis soluta quia
          qui sed adipisci voluptates illum ipsam voluptatem
          eligendi officia ut in
          eos soluta similique molestias praesentium blanditiis",
              "id": 90,
              "title": "ad iusto omnis odit dolor voluptatibus",
              "userId": 9,
            },
            {
              "body": "libero voluptate eveniet aperiam sed
          sunt placeat suscipit molestias
          similique fugit nam natus
          expedita consequatur consequatur dolores quia eos et placeat",
              "id": 91,
              "title": "aut amet sed",
              "userId": 10,
            },
            {
              "body": "aut et excepturi dicta laudantium sint rerum nihil
          laudantium et at
          a neque minima officia et similique libero et
          commodi voluptate qui",
              "id": 92,
              "title": "ratione ex tenetur perferendis",
              "userId": 10,
            },
            {
              "body": "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam
          voluptatem quis enim recusandae ut sed sunt
          nostrum est odit totam
          sit error sed sunt eveniet provident qui nulla",
              "id": 93,
              "title": "beatae soluta recusandae",
              "userId": 10,
            },
            {
              "body": "aspernatur expedita soluta quo ab ut similique
          expedita dolores amet
          sed temporibus distinctio magnam saepe deleniti
          omnis facilis nam ipsum natus sint similique omnis",
              "id": 94,
              "title": "qui qui voluptates illo iste minima",
              "userId": 10,
            },
            {
              "body": "earum voluptatem facere provident blanditiis velit laboriosam
          pariatur accusamus odio saepe
          cumque dolor qui a dicta ab doloribus consequatur omnis
          corporis cupiditate eaque assumenda ad nesciunt",
              "id": 95,
              "title": "id minus libero illum nam ad officiis",
              "userId": 10,
            },
            {
              "body": "in non odio excepturi sint eum
          labore voluptates vitae quia qui et
          inventore itaque rerum
          veniam non exercitationem delectus aut",
              "id": 96,
              "title": "quaerat velit veniam amet cupiditate aut numquam ut sequi",
              "userId": 10,
            },
            {
              "body": "eum non blanditiis soluta porro quibusdam voluptas
          vel voluptatem qui placeat dolores qui velit aut
          vel inventore aut cumque culpa explicabo aliquid at
          perspiciatis est et voluptatem dignissimos dolor itaque sit nam",
              "id": 97,
              "title": "quas fugiat ut perspiciatis vero provident",
              "userId": 10,
            },
            {
              "body": "doloremque ex facilis sit sint culpa
          soluta assumenda eligendi non ut eius
          sequi ducimus vel quasi
          veritatis est dolores",
              "id": 98,
              "title": "laboriosam dolor voluptates",
              "userId": 10,
            },
            {
              "body": "quo deleniti praesentium dicta non quod
          aut est molestias
          molestias et officia quis nihil
          itaque dolorem quia",
              "id": 99,
              "title": "temporibus sit alias delectus eligendi possimus magni",
              "userId": 10,
            },
            {
              "body": "cupiditate quo est a modi nesciunt soluta
          ipsa voluptas error itaque dicta in
          autem qui minus magnam et distinctio eum
          accusamus ratione error aut",
              "id": 100,
              "title": "at nam consequatur ea labore ea harum",
              "userId": 10,
            },
          ]
        `)
    })
    it("Fetch POST test ", async () => {
        const res = await POST("http://apis.juhe.cn/fapigx/everyday/query", {
            userId: "10",
            title: "test",
            body: "哈哈",
        })
        expect(res).toMatchInlineSnapshot(`
          {
            "error_code": 10001,
            "reason": "错误的请求KEY",
            "result": null,
            "resultcode": "101",
          }
        `)
    })

    it("Fetch POST return response ", async () => {
        //来一个post 返回是 stream 的接口
        const res = await POSTRESPONSE("http://lbsyun.baidu.com/index.php?title=webapi", {
            conversation_uuid: v4(),
            ask_type: "single_file",
            llm_type: "1",
            question: "hello"
        })
        expect(res).instanceOf(Response)
    })
})
