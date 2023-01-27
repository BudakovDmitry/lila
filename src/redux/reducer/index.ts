import { MoveType } from 'src/types'

const initialState = {
    cards: [
        {
            id: 0,
            title: 'РОЖДЕНИЕ (ДЖАНМА)',
            description: 'Этот мир - страна кармы. Игра заключена в самой природе сознания. В начале игры небыло, но сознание в соответствии со своей природой не могло оставаться неподвижным, без игры. А потому... "Да будет свет!" Да будет игра! И Абсолют из Единого превратился во множество. Вступая в игру, игрок повторяет изначальный процесс творения, когда Абсолют пробудился от бездействия и начал космическую игру, в которой каждый из нас является микрокосмом. Приняв решение играть, игрок должен подчиниться правилам игры (Дхарме) и кармическому жребию. Единица символизирует независимую личность, независимое решение, независимую жизнь, поиск чего-то нового, необыкновенного, оригинального.'
        },
        {
          id: 1,
          title: 'МАЙЯ',
          description: 'Человек рождается, чтобы принять участие в этой игре, чтобы понять, как принципы тонкого мира работают в мире плотном. А ее целью является единение, прекращение двойственности. Двойка несет в себе качества двойственности, то есть иллюзии. Это число получается, когда единицаповторяет сама себя. Двойка - это иллюзия, так как обе составляющие ее противоположности присутствуют в Едином. Все, что нужно сделать игроку, - это осознать, что он игрок и что испытываемое им чувство отдельности является иллюзией. Все восприятия, получаемые игроком из внешнего мира, существуют внутри него самого в виде сигналов, поступающих через органы чувств, и являются иллюзией. Эго не может функционировать без ума, ум также не может работать без органов чувтсв. Таким образом, полностью отрешиться от чувств "я" и "моего" возможно только при полном контроле за работой ума. Именно к этому состоянию стремяться те, кто занимается йогой. Когда оно достигнуто, иллюзорное осознание себя как отдельного независимого существа прекращается.'
        },
        {
          id: 2,
          title: 'ГНЕВ (КРОДХА)',
          description: 'Гнев - это неуверенность, основная проблема первой чакры. Гнев, вызываемый личными причинами, пожирает добрые качества личности и приводит к падению. Безличный гнев, без личных чувств, разрушает вызвавшую его причину, зло. С одной стороны, он очищает тело и по действию похож на очищение огнем, но цена этого слишком велика: уровень вибраций понижается настолько, что игроку приходится начинать игру снова с первого ряда. Гнев может выражаться двумя способами - насильственным и ненасильственным. Когда для выражения гнева принимается ненасильственный метод, это дает игроку огромную моральную силу.'
        },
        {
          id: 3,
          title: 'ЖАДНОСТЬ (ЛОБХА)',
          description: 'Материальное выживание является основной заботой игрока на уровне первой чакры. Когда игрок смешивает свое ощущение неудовлетворенности и необходимость материального выживания, появляется жадность. Теперь он начинает использовать основные навыки выживания, чтобы завладеть ещё большим. Однако чем больше он приобретает, тем сильнее становиться его жажда приобретения. Его ощущение пустоты достигает уровня паники, действия становятся безрассудными. Игрок, попадающий на поле жадности, открывает ворота своего сознания для майи, гнева и всех остальных проблем первой чакры.'
        },
        {
          id: 4,
          title: 'ФИЗИЧЕСКИЙ ПЛАН (БХУ-ЛОКА)',
          description: 'На физическом плане игрок в основном сосредоточен на материальных достижениях. Обычными его заботами являются деньги, дом, машина, еда и физическая сила. Его развлечения связаны с телом: занятия спортом, предполагающие соревнование и физический контакт. Его забавы также часто включают элементы насилия. Основным достижением является профессиональное мастерство. Все игроки должны пройти через этот план, прежде чем они достигнут других измерений. Семь змей ведут сюда других планов, демонстрируя особенную важность реализации природы самого плотного уровня существования.'
        },
        {
          id: 5,
          title: 'ЗАБЛУЖДЕНИЕ (МОХА)',
          description: 'Заблеждение - это привязанность к миру явлений как единственно возможному проявлению реальности. Заблуждение затуманивает ум, делая невозможным постижение истины. Единственное, что нужно понять: существование - это игра. С осознанием этого исчезает заблуждение относительно того, что игрок сам направляет свое существование. А с исчезновением заблуждения исчезает и негативная карма. Если он видит свою Дхарму и признает, что изменения не только возможно, но и необходимо, он готов к тому, чтобы двигаться дальше. Но если он считает свое видение мира полным и завершенным, он неизбежно будет возвращаться сюда снова и снова.'
        },
        {
          id: 6,
          title: 'ТЩЕСЛАВИЕ (МАДА)',
          description: 'Тщеславие - это самообман, ложная гордость, возведение воздушных замков. Игрок опьяняется своей силой, своими подлинными или мнимыми достоинствами и достижениями. Гордыня и тщеславие - это два опаснейших яда, которые мы пьем, находясь в плохом окружении. Плохая компания, порождение заблуждения и жадности, - это змея, приводящая игрока к тщеславию. Плохое окружение, в котором он находится, является проявлением дурных желаний. Опасность проявляется тогда, когда игрок оказывается увлеченным своими желаниями. Все правильное уже не кажется ему правильным, а плохое не кажется плохим. Его желание должно быть удовлетворено любой ценой, и таким образом он создает плохую карму и оказывается в плохой компании, среди тех, кто поддерживает его неправильное поведение. Поскольку человека на этой стадии развития формирует та группа людей, к которой он принадлежит, игрок может прекратить создание себе плохой кармы, если начнет искать хорошую компанию.'
        },
        {
          id: 7,
          title: 'АЛЧНОСТЬ (МАТСАРА ИЛИ МАТСАРЬЯ)',
          description: 'А этой игре алчность связана со змеей зависти, т.к. именно зависть, созданная тщеславием, приводит к алчности. В состоянии алчности игрок испытывает активную ненависть к другим игрокам. Он слишком хорош для них, и то, что они имеют, также слишкрм хорошо для них. Поэтому, рассуждает игрок, то, что принадлежит им, должно стать моим. Он становится недоброжелательным и испытывает страстное желание завладеть материальными благами окружающих его людей. Это чувство отличается от жадности, где просматривается только материальная сторона. Алчность - это жадность в совокупности с завистью. По мере того как игрок становится все более алчным, увеличивается его жажда к богатству. И все остальные проблемы первой чакры также начинают мучить его.'
        },
        {
          id: 8,
          title: 'ЧУВСТВЕННЫЙ ПЛАН (КАМА-ЛОКА)',
          description: 'Кама означает желание - желание любого рода. Люди желают славы, богатства, успеха, семейного счастья, положения в обществе. Любое желание, устремление, благородная или неблагородная цель - это кама. Кама является первой стадией эволюции. Если бы не было желания, не было бы и никакого мироздания. Девятая лока связана с неведением, непросвещенностью, серостью. Она как бы намекает игроку, что необходимо полчать новые знания, а не останавливаться на достигнутом. Это лестница, ведущая игрока ко второму ровню сознания, который начинается с очищения.'
        },
        {
          id: 9,
          title: 'ОЧИЩЕНИЕ (ТАПА)',
          description: 'Находясь на первом уровне, в течении некоторого времени игрок може чувствовать себя вполне благополучно, однако вскоре он начинает испытывать недостаток жизненной энергии, растраченной в негативных эмоциях и чувственности. Потеря энергии приводит к ощещениям внутренней пустоты. Очищение всегда сопровождается повышением уровня вибраций, и энергия начинает течь вверх. Этот процесс происходит благодаря изменению образа жизни. Очищение слуха происходит при отвлечении силы слышания от внешнего мира и направлении ее к звукам мира внутреннего. Сохранение полного молчания в течение определенного промежутка времени очищает процесс мышления. Голодание очищает тело. Преодоление трудностей очищает личность игрока, слушание чтения священных писаний и боговдохновенной поэзии очищает его внутреннее "я", чтение мантр очищает нервы, а концентрация и медитация очищают и тело, и ум.'
        },
        {
          id: 10,
          title: 'РАЗВЛЕЧЕНИЯ (ГАНДХАРВЫ)',
          description: 'Игрок входит в область развлечений после очищения. Этот уровень является отражение внутренней радости, чувства ритма и гармонии. Такой взгляд на жизнь достигается только после преодоления уровня первой чакры с его основной проблемой - неуверенностью в себе и озабоченностью материальным благополучием Развлечения приносят чувство легкости, побуждая к отдыху и наслаждению моментом. Они оживляют монотонность повседневной жизни, открывая новые перспективы и горизонты. Игрок может насладиться моментом и избавиться от забот, страхов и желаний. Развлечения оживляют однообразную жизнь и открывают новые возможности и перспективы, которые раньше казались недостижимыми.'
        },
        {
          id: 11,
          title: 'ЗАВИСТЬ (ИРАСЬЯ)',
          description: 'Попадая на клетку зависти, игрок испытывает недостаток уверенности в себе. Когда человек попадает под влияние зависти, его энергия направляется вниз. По стечению кармических обстоятельств он попал на план второй чакры, но реально он не заслуживает того, чтобы оставаться здесь. Фактически он не может остаться на этом плане из-за негативных вибраций, оставшихся в его личности. В такие моменты игрок завидует тем, кто способен пребывать на высших планах, не теряя равновесия. Зависть и является той негативной реакцией, которая приводит к падению игрока на уровень первой чакры, где ему предстоит осознать и отработать новые элементы своей негативной кармы. Эта змея снова и снова жалит игрока, заставляя его возвращаться вниз, что служит очищению его мышления в процессе игры.'
        },
        {
          id: 12,
          title: 'НИЧТОЖНОСТЬ (АНТАРИКША)',
          description: 'Ничтожность является состоянием, непосредственно связанным с нестабильным негативным интеллектом. Когда игрок перестает осознавать цель своего существование, чувства заброшенности (экзистенциального страха) и тщетности наполняют его сознание. Он не видит никакого смысла в общении с кем-либо. И недостаток жизненной силы, сопровождающийся острейшим чувством внутренней пустоты, заставляет его метаться, не находя себе места. Он находится в постоянной негативности и тревоге. Рассеяние жизненой силы в направлении обьектов чувств является основной проблемой на уровне второй чакры. Однако состояние ничтожности отнюдь не вечно. Как только игрок начинает пополнять свои энергетические ресурсы, он оказывается готовым к продолжению игры.'
        },
        {
          id: 13,
          title: 'АСТРАЛЬНЫЙ ПЛАН (БХУВАР-ЛОКА)',
          description: 'Материальные нужды, относящиеся к первой чакре, удовлетворены, и теперь игрок видит, что жизнь гораздо интереснее и разнообразнее, чем он мог себе представить, будучи озабочен добыванием средств к существованию. На вполне уверенности в себе высвобождается его творческое воображение. Однако фантазии требуют энергии больше, чем любой другой вид человеческой деятельности. Игрок направляет все свои ресурсы на построение воздушных замков. Он стремится оторваться от физической реальности в погоне за наслаждениями, в удовольствиях и отождествлении с разными группами людей. Игрок уже преодолел земной план, а его фантазия дает ему предоставление о небесах. Опасность заключается в том, что фантазии уводят игрока от реальности, истощая его энергии, и могут остаться невоплощенными.'
        },
        {
          id: 14,
          title: 'ПЛАН ФАНТАЗИИ (НАГА-ЛОКА)',
          description: 'Здесь нет никаких пределов или ограничений, вся энергия игрока направляется на исследование этого мира и проявляется в создании произведений искусства, в новых идеях и открытиях. Многие из лучших произведений искусства возникли благодаря погружению в этот воображаемый мир. Однако если игрок теряет контроль над своими фантазиями, он теряет контакт с реальностью окружающей его действительности и может оказаться в пасти змеи ревности, поджидающей его на следующей клетке.'
        },
        {
          id: 15,
          title: 'РЕВНОСТЬ (ДВЕША)',
          description: 'Он начинает подозревать других людей, когда их действия расходятся с его представлениями о самом себе. В любовных взаимоотношениях он становится ревнивым и боится неверности. Его сомнения растут, и вскоре его энергия возвращается к первой чакре, где он попадает в сети жадности. Вскормленная неуверенностью в себе, ревность приносит плод потери ощущения надежности, безопасности, а это является основной чертой, характерной для первой чакры. Недостаток веренности в себе ведет также к неприязни к себе, которая затем проецируется как наша неприязнь по отношению к другим. Чтобы восстановить уверенность в себе, игроку теперь придется пройти через опыт первой чакры, где он может разобраться с ее причинами и повысить свои вибрации.'
        },
        {
          id: 16,
          title: 'СОСТРАДАНИЕ (ДАЙЯ)',
          description: 'Воображение позволяет игроку представить себе возможные мотивы действий других людей. Он видит, что другой мог быть тоже задет или обижен им самим или другим человеком. Он знает, что и он и другие, являются игроками в космической игре, смысл и правила которой далеко превосходят их настоящий уровень понимания. Он осознаёт, что есть другие, более высокие состояния, позволяющие человеку судить о поступках других.  Это понимание, исполненное сострадания, позволяет ему простить другого. Это освобождает его сознание от самоотождествления, и он взлетает вверх к плану Абсолюта. Сострадание, доброта, терпение во все времена способствовали развитию доброго начала в человеке, помогая ему в очищении своих эмоций, формировании характера и этическом развитии. Барьеры личности рушатся, и ум игрока становится отражением Божественного Сострадания - это отказ от своего «я». Однако оно не может освободить игрока от накопленной им кармы, так что теперь он должен бросать кость, пока не будет ужален змеей на клетке тамогуны, что позволяет ему вернуться на землю для завершения своей миссии.'
        },
        {
          id: 17,
          title: 'ПЛАН РАДОСТИ (ХАРША-ЛОКА)',
          description: 'Путешествие в мире фантазий подходит к концу, он движется к реальному миру и практике карма-йоги. Он не знает, как скоро он сможет достичь своей цели, Космического Сознания, но он мог на своём опыте убедиться, что может преодолевать уровни бытия, возвышая свою энергию. Это момент преодоления, и дух радости наполняет игрока. Он сумел пройти первую чакру, и теперь он не испытывает страха и вполне уверен в себе. Поднявшись над чувственными желаниями, он завершил и вторую стадию. Он чувствует себя на вершине своего существа и всего мира. Чувство времени исчезает: радость всегда вечна, каким бы кратким ни был ее миг. Уходят и ограничения пространства: радость не знает границ. Однако радость не может быть постоянной: вскоре силы кармы начинают свою работу, побуждая игрока к движению через третий уровень.'
        },
        {
          id: 18,
          title: 'ПЛАН КАРМЫ (КАРМА-ЛОКА)',
          description: 'Это момент отрезвления. Именно в этот момент игрок осознаёт существование закона кармы. Все вещи находятся в постоянном взаимодействии между собой. На уровне энергий карма определяет частоту вибраций игрока, которая проявляется на физическом уровне в способах его поведения. Карма (действие) создаёт оковы, но она же может их и разрушить. Игрок несёт кармическую ответственность за своё «я».'
        },
        {
          id: 19,
          title: 'БЛАГОТВОРИТЕЛЬНОСТЬ (ДАНА)',
          description: 'Эта добродетель является одним из проявлений Божественного начала в человеке, сущности его сознания. Попадая на это поле, игрок совершает действия, направленные на благо других, без ожидания какой-либо выгоды для себя. Эти действия наполняют игрока радостью, сопровождающей подъем энергий к более высоким уровням. Реальность нужд других людей и желание делиться - эти два фактора вступают в работу на данном уровне игры. Благотворительность удовлетворяет развеивающееся эго и освобождает игрока от оков третьей чакры. Благотворительность является одной из важнейших вех в прохождении плана кармы. Это сила, мотивирующая одно из самых возвышенных направлений.'
        },
        {
          id: 20,
          title: 'ИСКУПЛЕНИЕ (САМАНА ПАПА)',
          description: 'Игрок осознаёт, что в процессе удовлетворения своих желаний он мог приносить вред окружающим.  Попадая в область искупления, он видит, что следовал неправедному пути и, прибегая к неправедным средствам, создал внутри себя, неблагоприятные вибрации, которые теперь препятствуют достижению внутреннего покоя. Игрок испытывает острое и давящее желание очистить свою негативную карму. Так же игрок может испытывать чувство вины из-за того, что не может приспособиться к более высокому уровню вибраций. В обоих случаях раскаяние даёт позитивные результаты и устанавливает восходящий ток энергии.'
        },
        {
          id: 21,
          title: 'ПЛАН ДХАРМЫ (ДХАРМА-ЛОКА)',
          description: 'Все, что вы считаете благом для себя, будет хорошо и для других. Нет Дхармы лучше, чем добрые дела, и нет худшей адхармы, чем причинение вреда. Дхарма - это истина, поддерживающая правильные отношения между всеми элементами творения. Дхарма подобна правильной дороге для человека и для того, чтобы следовать ей - важно понимать все её аспекты, а не только общее обозначение. Одна сторона дхармы заключается в естественном следовании в своей природе, другая заключается в следовании общих морально-нравственных правил. Те, кто следует своей дхармы - достигают совершенства во всех сферах жизни, и в материальной и в духовной.'
        },
        {
          id: 22,
          title: 'НЕБЕСНЫЙ ПЛАН (СВАРГА-ЛОКА)',
          description: 'Тут игрок целиком осознаёт себя, своё эго и учится существовать не только для себя, но и во благо. Небеса - это приманка для заблудших овец первой и второй чакр, цель которой - вернуть их к духовному пути. Этот приём использовался святыми и пророками всех религий для поднятия духовного уровня масс. Здесь нет ни низших желаний, ни настоят, ни привязанности, ни жадности, ни ревности, ни стяжательства, ни гнева, ни чувственности, ни ничтожности. Вместо этого здесь существуют очищения, милосердие, радость и вечная жизнь, полная наслаждения.'
        },
        {
          id: 23,
          title: 'ПЛОХАЯ КОМПАНИЯ (КУ-САНГ-ЛОКА)',
          description: 'В дурной компании обычно поддерживаются мнения, что причиной личных проблем служат окружающие люди или общество. Самым ярким примером служат группы террористов, прибегающих к любым средствам для достижения своих целей. Оправдывая свои действия возвышенными целями,   они лишь вводят в заблуждении друг друга. Им кажется, что убийство тех или иных людей может удовлетворить их желания. Они слепо верят,  что их цели являются единственно правильными целями для всех. Это отклонение Дхармы является грубым злоупотреблением силой,  одной из главных проблем на уровне третьей чакры. Связь с дурной компанией является адхармой,  приводящей к падению. Лишь внимательно следуя принципам Дхармы, игрок может уберечь себя от этой ловушки.'
        },
        {
          id: 24,
          title: 'ХОРОШАЯ КОМПАНИЯ (СУ-САНГ-ЛОКА)',
          description: 'В хорошей компании пороки не культивируются. Игроки с помощью учителя стараются служить друг для зеркалом, в котором бы отражались как позитивные, так и негативные тенденции. Результатом пребывания в дурной компании является развитие самомнения. Хорошая компания является существенным фактором для развития игрока. Здесь он получает возможность вырасти их своих прежних отождествлений  в атмосфере поддержки, доверия и сострадания. Хорошая компания является позитивным аспектом стремления к самоотождествлению и самоутверждению, свойственного для третьей чакры. На пути игрока больше нет преград к четвертому уровню игры, плану космического разума и равновесия.'
        },
        {
          id: 25,
          title: 'ПЕЧАЛЬ (ДУКХА)',
          description: 'Ученик стремится к отождествлению с божеством. Повторяющиеся неудачи приносят печаль. Игрок осознает существование Божественного и старается реализовать его внутри собственной личности. Разделение же кажется непреодолимой пропастью. Он видит, как проблемы первой ив торой чакр снова и снова поглощают его энергию. Он чуствует себя неспособным и недостойным намеченной цели. И все же существует путь, дающий ему надежду. Это самоотверженное служение, представленное следующей клеткой игральной доски.'
        },
        {
          id: 26,
          title: 'САМООТВЕРЖЕННОЕ СЛУЖЕНИЕ (ПАРАМАРТХА)',
          description: 'Никто не может гарантировать награды: бесчисленные факторы влияют на исход любого дела. Если игрок свободен от надежд и желаний, каждый ивент является для него достижением. Освобождаясь от ложной позиции приобретений и потерь, он достигает самоотверженного служения, и стрела переносит его вверх, к человеческому плану. Исполним своих обязанностей в надлежащей манере, отказ от собственного “я” ради того, что должно быть сделано, приводит к потере отожествления, являющегося главной проблемой третьей чакры. Индивидуальность перестает существовать как отдельная единица, становятся частью большего целого.'
        },
        {
          id: 27,
          title: 'ИСТИННАЯ РЕЛИГИОЗНОСТЬ (СУДХАРМА)',
          description: 'Разные люди рождаются в разное время и у разных родителей. Родственники, окружение, атмосфера, а также географическое, этнографическое и социальные условия различны для разных людей. Каждый рождается с определенными набором позитивных и негативных задатков - никто не идеален. Каждый должен понять свою собственную роль в игре. Он должен следовать своему уникальному пути к освобождению. Если он чувствует себя  уверенно на каком-то из уровней, именно отсюда он должен стараться развивать свою творческую деятельность. Это и есть его единственная судхарма. Но понимание своей роли в игре приходит только с попаданием на уровень четвертой чакры, на поле судхармы, с которого он перемещается к плану аскезы для для строгого самоограничения и работы над собой.'
        },
        {
          id: 28,
          title: 'ОТСУТСТВИЕ РЕЛИГИОЗНОСТИ (АДХАРМА)',
          description: 'Невнимание к себе - адхарма, но и поклонение самому себе - тоже адхарма. Жить в постоянном напряжении, без отдыха, очевидная адхарма. Но освобождаться от напряжений, прибегая к ложным средствам, бдел еще большей адхармой. Величайшей адхармой является саморазрушение. Находясь в четвертой чакре, игрок начинает понимать важность, настоящей религиозности. В  поисках своей роли в игре он может пренебречь существующими аспектами Дхармы. Пытаясь делать все на свой лад, игнорируя планетарные законы существования. Ключом к этой ситуации служит вера. Вера, гармонизирующая с законами существования, - это судхарма; просто вера - адхарма.'
        },
        {
          id: 29,
          title: 'ХОРОШИЕ ТЕНДЕНЦИИ (УТТАМА ГАТИ)',
          description: 'Благие тенденции проявляются у игрока спонтанно, если он движется в гармонии с законами макрокосма. Пока он вибрирует  на трех нижних пленах, эти тенденции не развиваются. Их рост начинается лишь здесь, в четвертой чакре, поскольку это требует достижении определенной степени внутреннего баланса. Начните с наблюдения тех перемен, что происходят в вас на рассвете и на закате. Поднимайтесь утром, когда еще темно, примите душ и переоденьтесь в чистую одежду для утренней медитации. Другие хорошие тенденции включают переход к вегетарианской диете, практику асан хатха-йоги, изучение способов контроля над дыханием. Практика благих тенденций помогает игроку стабилизировать свою жизнь так, чтобы она ритмично развивалась в позитивном направлении.'
        },
        {
          id: 30,
          title: 'ПЛАН СВЯТОСТИ (ЯКША-ЛОКА)',
          description: 'Игрок, попадающий на план святости, переживает божественную милость через понимание космических принципов. Святость является прямым результатом хороших тенденций. Это  единство превосходит простое интеллектуальное понимание и становится тельной частью каждодневной жизни. Игрок старается найти связи между божественным и своей повседневной жизнью.'
        },
        {
          id: 31,
          title: 'ПЛАН РАВНОВЕСИЯ (МАХАР-ЛОКА)',
          description: 'Здесь игрок поднимается над физическим  уровнем, желаниями и мыслями. Здесь же игрок преодолевает интеллектуальное понимание Божественного и движется к прямому переживанию. Его присутствие  внутри своего “я”.  Именно в сердце живет наше эмоциональное”я” . Независимо от того, каким путем.'
        },
    ],
    allMoves: [] as MoveType[],
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MOVE':
        return {
          ...state,
          allMoves: [...state.allMoves, action.payload],
        }
      default:
        return state
    }
  }
  
  export default reducer
  