export type NoteSection = "Case Study" | "心态" | "思考过程"

export type ArticleFigure = {
  src: string
  alt: string
  caption: string
}

export type ArticleBlock = {
  heading: string
  paragraphs?: string[]
  list?: string[]
  figures?: ArticleFigure[]
}

export type Note = {
  format?: "qa"
  slug: string
  path: string
  section: NoteSection
  title: string
  date: string
  dateLabel: string
  shortDateLabel: string
  duration: string
  source: string
  cardSource: string
  summary: string
  featured?: boolean
  callout?: string
  figures?: ArticleFigure[]
  body: ArticleBlock[]
}

export type MonthArchive = {
  id: string
  label: string
  path: string
  hero: {
    kicker: string
    title: string
    lead: string
  }
  notes: Note[]
}

export const months: MonthArchive[] = [
  {
    id: "2026-11",
    label: "2026年11月",
    path: "/",
    hero: {
      kicker: "2026年11月",
      title: "这个月，先记住这一笔反弹。",
      lead: "从假说到确认，再看仓位和心态怎么处理。下面是这个月最值得回看的部分。",
    },
    notes: [
      {
        slug: "nasdaq-rebound",
        path: "/case-study/nasdaq-rebound",
        section: "Case Study",
        title: "纳指反弹：从假说到确认",
        date: "2026-11-04",
        dateLabel: "2026年11月4日",
        shortDateLabel: "11月4日",
        duration: "9分6秒",
        source: "整理自阿豬搵錢日記",
        cardSource: "阿豬搵錢日記",
        featured: true,
        summary:
          "弱市里不贪完整回撤。等下跌减速，并做出更高的低点后再进。确认后，目标只定在回撤的三分之一到一半，大约 4 到 5.5R；开盘站稳，就把止损提到保本附近。",
        callout:
          "这是一笔已经完成的短线博反弹，重点是思考过程，不是现在该不该做多的建议。",
        body: [
          {
            heading: "市场背景",
            paragraphs: [
              "当时是一个偏弱、正在下跌的市场，过去一天波动很大。收市后，纳指期货曾因 AMD 的业绩结果先升；到了美国晚上，中期选举结果开始出来，市场担心民主党若拿下众议院和参议院，会对 AI 故事、尤其是数据中心不利，期货由升转跌，大约跌了 2%。到大约晚上九时，预测市场已经把民主党获胜的机会定价到很高，选举结果里这件事，很大程度已经被反映进价格里了。历史上，进入选举时市场往往偏弱；选完以后不确定性下降，有时会出现一轮情绪上的缓和反弹。技术面上，纳指靠近 200 日均线和 7 月底低点，RSI 掉到 30，上一次到这么低，是 7 月下旬。",
            ],
            figures: [
              {
                src: "/images/video-stills/nov4-0048-chart.png",
                alt: "视频截图，纳指期货日线 K 线图：价格三次靠近均线的低点用绿圈标出，下方 RSI 也在相近位置见低，当时 RSI 靠近 30",
                caption: "视频截图（0:48）。纳指期货日线：RSI 掉到 30 附近，绿圈标出的是前几次靠近均线的低点。",
              },
            ],
          },
          {
            heading: "为什么会看反弹",
            paragraphs: [
              "把几件事放在一起：价格已经远离均线，又落到重要位置附近；选举夜的跌幅，有可能已经被定价进去了。不是在预测市场一定弹，只是把短线反弹当成一种可能。",
            ],
          },
          {
            heading: "要看到什么证据",
            paragraphs: [
              "均线只是区域，不是魔法线。真正要等的是：下跌减速，然后出现有力度的由空转多，而不是一个软弱的反弹。",
            ],
            figures: [
              {
                src: "/images/video-stills/nov4-0425-chart.png",
                alt: "视频截图，纳指期货 5 分钟 K 线图：选举夜跌到青色 200 日线附近，反弹后再下跌",
                caption: "视频截图（4:25）。5 分钟图：选举夜跌到青色的 200 日线附近，反弹后再跌。均线是区域，不是一碰就反。",
              },
            ],
          },
          {
            heading: "怎么确认",
            list: [
              "做出比前低更高的低点",
              "打穿这一波的摆动高点，才算比较干净的确认",
              "弱市里不假设一天走完全部回撤",
            ],
            figures: [
              {
                src: "/images/video-stills/nov4-0610-chart.png",
                alt: "视频截图，纳指期货 5 分钟 K 线图：黄线标出下跌减速后做出的更高低点",
                caption: "视频截图（6:10）。黄线标出：下跌减速后，做出了更高的低点。",
              },
              {
                src: "/images/video-stills/nov4-0616-chart.png",
                alt: "视频截图，纳指期货 5 分钟 K 线图：价格从更高的低点向上打穿这一波的摆动高点",
                caption: "视频截图（6:16）。价格打穿这一波的摆动高点，作为确认。",
              },
            ],
          },
          {
            heading: "风险与目标",
            paragraphs: [
              "目标定在回撤的三分之一到一半，大约 4 到 5.5R。开盘后 10 到 20 分钟站稳，就把止损提到大概保本附近，让最坏情况可以睡着。",
            ],
            figures: [
              {
                src: "/images/video-stills/nov4-0710-chart.png",
                alt: "视频截图，纳指期货 30 分钟 K 线图：斐波那契回撤标出 0.382、0.5 和 0.618",
                caption: "视频截图（7:10）。斐波那契回撤 0.382 到 0.5，对应目标大约在回撤的三分之一到一半。",
              },
              {
                src: "/images/video-stills/nov4-0800-chart.png",
                alt: "视频截图，纳指期货 5 分钟 K 线图：光标指在低点附近的原止损位置，上方可见风险回报色块",
                caption: "视频截图（8:00）。原止损放在低点附近。开盘站稳后，再把止损上移到保本附近。",
              },
            ],
          },
        ],
      },
      {
        slug: "selloff-selection-stops",
        path: "/mindset/selloff-selection-stops",
        section: "心态",
        format: "qa",
        title: "大跌周怎么选，止损被穿时怎么想",
        date: "2026-11-11",
        dateLabel: "2026年11月11日",
        shortDateLabel: "11月11日",
        duration: "12分33秒",
        source: "整理自阿豬搵錢日記",
        cardSource: "阿豬搵錢日記",
        summary:
          "个股波动太大时，更倾向用板块或指数。止损只穿一点就走；已经深亏，则先问自己现在还会不会重新开仓。",
        callout:
          "这是一则整理后的心态笔记，重点是思考过程，不是现在该不该交易的建议。",
        body: [
          {
            heading: "大跌的日子里，个股波动太大，该怎么选？",
            paragraphs: [
              "更倾向用板块或指数来做，而不是押在某一只名字上。大跌的日子里，个股更容易被单笔事件带着走，波动太大、又来不及做细分析时，板块和指数更稳妥。",
            ],
          },
          {
            heading: "止损被触发，但价格只穿过去一点，要不要再等等？",
            paragraphs: [
              "不要等，先离开。止损一旦被触发，就算价格只比止损价穿过去一点，也不该因为“只穿了一点”就改主意。",
            ],
          },
          {
            heading: "回头看时已经亏得很深，该怎么想？",
            paragraphs: [
              "先把自己从原有仓位里抽出来问一句：现在看到这个价格，我还会不会重新开同一笔？如果不会，仓位就不该只因为舍不得而留着。",
            ],
          },
        ],
      },
      {
        slug: "strength-after-derisking",
        path: "/mindset/strength-after-derisking",
        section: "心态",
        format: "qa",
        title: "减仓潮过后，强势未必是吸筹",
        date: "2026-11-08",
        dateLabel: "2026年11月8日",
        shortDateLabel: "11月8日",
        duration: "21分17秒",
        source: "整理自阿豬搵錢日記",
        cardSource: "阿豬搵錢日記",
        summary:
          "大跌日还能上涨的是相对强势，但也可能只是空头回补。若要试，也宜小仓、紧止损，先看潮过后还能不能强。",
        callout:
          "这是一则整理后的心态笔记，重点是思考过程，不是现在该不该追强势的建议。",
        body: [
          {
            heading: "大跌日还能上涨的股票，是不是有人在吸筹？",
            paragraphs: [
              "不一定。大跌日还能上涨，看起来是相对强势，会显得很清楚，也很容易被当成有人在吸筹，但这只是其中一种可能。",
            ],
          },
          {
            heading: "那还有什么可能？",
            paragraphs: [
              "减仓潮里，强势也可能只是空头回补：不是因为更看好，而是不得不买回来。吸筹和回补看起来都像上涨，但背后不是一回事。",
            ],
          },
          {
            heading: "如果还是想试，该怎么做？",
            paragraphs: [
              "小仓、紧止损。先看潮过了以后，它还能不能继续强。如果潮一过就变弱，就更像是短暂的回补，而不是可以跟着走的吸筹。",
            ],
          },
        ],
      },
      {
        slug: "first-bounce",
        path: "/mindset/first-bounce",
        section: "心态",
        format: "qa",
        title: "第一波反弹，往往好于后面的延续",
        date: "2026-11-01",
        dateLabel: "2026年11月1日",
        shortDateLabel: "11月1日",
        duration: "24分23秒",
        source: "整理自阿豬搵錢日記",
        cardSource: "阿豬搵錢日記",
        summary:
          "被迫卖盘会越来越少。不要错过较好的第一波，只去做更差的后面几段。",
        callout:
          "这是对反弹节奏的整理，不是预测下一次一定会出现反弹。",
        body: [
          {
            heading: "急跌之后，卖盘会发生什么变化？",
            paragraphs: [
              "被迫卖盘会越来越少。急跌里总有一部分人是不得不卖，卖过一轮之后再跌，剩下要卖的人就少一点。",
            ],
          },
          {
            heading: "为什么第一波反弹往往更好？",
            paragraphs: [
              "因为被迫卖盘变少，第一波反弹通常比后面几段更干净。越往后，值得去博的程度往往越低，顺利的程度和空间通常也没有第一波那么好。",
            ],
          },
          {
            heading: "第一波没做成，要不要追后面的延续？",
            paragraphs: [
              "不必追。不要错过较好的第一波，只去做更差的后面几段；后面看起来更完整，不代表更值得做。",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2026-10",
    label: "2026年10月",
    path: "/2026-10",
    hero: {
      kicker: "2026年10月",
      title: "这个月，先记住：确认了再买。",
      lead: "急跌之后不抄在半路。等价格自己转过来，再看误报之后谁弹、谁不弹。下面是这个月最值得回看的部分。",
    },
    notes: [
      {
        slug: "nasdaq-futures-bounce",
        path: "/case-study/nasdaq-futures-bounce",
        section: "Case Study",
        title: "纳指期货短线反弹：从假说到确认",
        date: "2026-10-25",
        dateLabel: "2026年10月25日",
        shortDateLabel: "10月25日",
        duration: "25分21秒",
        source: "整理自阿豬搵錢日記",
        cardSource: "阿豬搵錢日記",
        featured: true,
        summary:
          "急跌之后不预测周一还会不会再暴跌。等期货先比周五再插一点，再在几分钟内改成 V 形，并升回周五收市附近，才确认反弹。目标只看到回撤的三分之一到一半，大约 3.8R；止损放在当日低点附近。",
        callout:
          "这是一笔已经完成的短线博反弹，重点是思考过程，不是现在该不该做多的建议。整理时这笔例子已经走完。",
        body: [
          {
            heading: "市场背景",
            paragraphs: [
              "那个星期，表面上标普和纳指只跌了大约半个百分点，但板块之间差得很远：网络安全和软件明显偏强，能源也偏强；金属矿业偏弱，AI 硬件和半导体也偏弱。中间还夹着一则关于 PHP 安全漏洞的报道，网络安全股票因此涨了不少。星期二、三相对稳定，星期四才是最猛的一天：跌得很集中，半导体指数当天大约跌了 7%，相关的大市值股票大约 3% 到 4%，更小的有的到 5% 到 10%；同一天，偏旧经济、偏价值的股票反而有人买。一天之内，波动、价值、动量这些因子的幅度，已经接近平时一个星期的量级，看起来像是机构在减仓，甚至有些像被迫平仓。有投行的经纪报告也写到，星期四多空基金平均亏了大约 1.4%，偏科技和传媒的亏得更多；十月对不少基金已经不好过，年底又临近。星期五，动量因子有所回升，这种被迫卖出的流程，至少在当天看起来停了一停。气氛上，恐慌贪婪指数到了极度恐惧；星期三到星期五那几天，又急又深地跌了大约百分之五出头。周末还有人在说十月的黑色星期一。",
            ],
          },
          {
            heading: "为什么会看反弹",
            paragraphs: [
              "短期像超卖，又靠近前低、整理区或重要均线这类支持。不是在预测市场一定弹，只是把“有短线反弹”当成一种可能。",
            ],
          },
          {
            heading: "要看到什么证据",
            paragraphs: [
              "只是跌得多、气氛差，还不够。要看价格行动跟恐慌叙事是不是对得上。如果真的那么差，周一开了再跌之后，应该继续往下，而不该很快升回去。",
            ],
          },
          {
            heading: "怎么确认",
            list: [
              "卖盘过后的周一早上，期货先比周五再插一点",
              "几分钟内变成 V 形反弹",
              "升回大约周五收市的范围，这一点被当成确认：价格行动已经不符合“还会大跌”的气氛",
              "到这里，才把“继续下跌”换成“现在是反弹中”",
            ],
            figures: [
              {
                src: "/images/video-stills/oct25-0455-chart.png",
                alt: "视频截图，纳指期货 15 分钟 K 线图：黑色时段是美盘、蓝色是亚盘，周一早段先跌破周五低点后随即 V 形弹回，图上标了风险回报约 3.82",
                caption: "视频截图（4:55）。15 分钟纳指期货：黑色是美盘、蓝色是亚盘。周一早段先跌破周五低点，随即 V 形弹回。",
              },
            ],
          },
          {
            heading: "风险与目标",
            paragraphs: [
              "止损放在当天低点附近，下行大约半个百分点。当时仍是下降趋势，所以不贪前高。把这段卖盘拉斐波那契，弱反弹若能走到回撤的三分之一到一半，大概就落在周五开市附近；这样大约是 3.8R，接近 4 对 1。逆势博反弹本来就有失败机会，但跌得太急、气氛太差、又靠近支持，才觉得这个比例值得一搏。这笔后来确实弹到了周五开市附近；赚亏本身更像运气，更值得留下的是这套从假说到确认的过程。",
            ],
            figures: [
              {
                src: "/images/video-stills/oct25-0730-chart.png",
                alt: "视频截图，纳指期货日线 K 线图：卖盘段标出斐波那契回撤 0.382、0.5 和 0.618",
                caption: "视频截图（7:30）。纳指期货日线：这段卖盘的斐波那契回撤，0.382 到 0.5 大约在 29,847 到 30,045。",
              },
              {
                src: "/images/video-stills/oct25-0751-chart.png",
                alt: "视频截图，纳指期货 15 分钟 K 线图：白圈标出靠近周五高点的红色目标线，风险回报约 3.82",
                caption: "视频截图（7:51）。同一张 15 分钟图：白圈标出的红色目标线靠近周五高点，风险回报约 3.82。",
              },
            ],
          },
        ],
      },
      {
        slug: "wait-for-confirmation",
        path: "/process/wait-for-confirmation",
        section: "思考过程",
        title: "确认后再买：短线反弹怎么想",
        date: "2026-10-18",
        dateLabel: "2026年10月18日",
        shortDateLabel: "10月18日",
        duration: "23分33秒",
        source: "整理自阿豬搵錢日記",
        cardSource: "阿豬搵錢日記",
        summary:
          "跌的时候即使靠近支持，也没有清楚的办法控制风险。等它转过来、有了确认，再用前面的低点做止损。即使后来入场价看起来一样，过程并不一样。",
        callout:
          "这是对短线反弹思考过程的整理，不是一份现在该买哪些股票的清单。",
        body: [
          {
            heading: "为什么不在跌的时候买",
            paragraphs: [
              "气氛差的时候，会去找短线反弹的机会，但不会在下跌途中买。就算价格已经靠近一个重要的位置或均线，理论上该有支持，它仍然可以再跌穿。跌的时候，没有一个清楚的办法知道错了该在哪里认，风险有多大。",
            ],
          },
          {
            heading: "确认之后怎么想",
            paragraphs: [
              "等它开始反弹，并看到确认，再用前面的低点做止损。这样如果判断错了、还没见底，再往下走时，比较容易知道何时认错，以及这次要承担多少风险。最终买进的价格可能和“跌的时候买”一模一样，但过程不同。",
            ],
          },
          {
            heading: "错了怎么办",
            paragraphs: [
              "一个常见想法是：周五因为大市下跌，价格跌穿了日线上的关键支持，短线先被震出去。接下来改看更短的时间框架，例如五分钟图，看会不会先站稳，再打穿一个短线高点。到了那里，才考虑是不是入场的机会；止损就放回低点。",
              "若突破之后又掉下来并加速走弱，说明原来以为有支持的那一层已经失败了，就离开，不必再跟它争。若是跌穿之后又很快升回去，有时会再试。这类交易有可能先亏几次才做成一笔；若按大约 3 对 1 来算，连亏三次再赢一次，也只是打平。五分钟图要看得很紧，入场点差一点点，整笔的位置就会完全不同；看不了这么细，也可以不做这类操作。",
            ],
            figures: [
              {
                src: "/images/video-stills/oct18-0913-chart.png",
                alt: "视频截图，软件板块 ETF（IGV）日线 K 线图：一条紫色支持被周五阴线跌穿",
                caption: "视频截图（约 9:08）。软件板块 ETF（IGV）日线：紫色支持被周五阴线跌穿。",
              },
              {
                src: "/images/video-stills/oct18-0940-paint.png",
                alt: "视频画板截图：一条弯的绿色支持，上方绿线附近圈出跌破",
                caption: "视频截图（约 9:47，画板）。用日线思路画的：下面一弯绿色是支持的底部，上面的绿线附近圈出跌破。",
              },
              {
                src: "/images/video-stills/oct18-0947-paint.png",
                alt: "视频画板截图：K 线跌穿一条绿色水平支持",
                caption: "视频截图（约 9:55，画板）。K 线跌穿绿色支持。",
              },
              {
                src: "/images/video-stills/oct18-1012-paint.png",
                alt: "视频画板截图：跌穿后反弹到短线高点，圆圈标可能的入场，止损在低点，旁注约 8R 和 2R",
                caption: "视频截图（约 10:35，画板）。跌穿后弹到一个短线高点，圆圈是考虑入场的位置，止损画在低点，旁边标了大约 8R 和 2R。",
              },
              {
                src: "/images/video-stills/oct18-1130-paint.png",
                alt: "视频画板截图：红K 跌穿绿色支持后继续下跌，没有反弹",
                caption: "视频截图（11:30，画板）。红 K 跌穿绿色支持后继续往下，没有反弹。",
              },
              {
                src: "/images/video-stills/oct18-5min-paint.png",
                alt: "视频画板截图，标了 5 min：先跌破一条线，再弹回去穿过它",
                caption: "视频截图（12:00，画板）。标了 “5 min”：先跌破，再弹回去穿过那条线。",
              },
            ],
          },
          {
            heading: "更想看到怎样的开法",
            paragraphs: [
              "更想看到的是：周五已经跌了不少，周一再低开，或开了之后头几分钟跌得很急，再在几分钟内 V 形回来。若这发生在开盘后大约十五到三十分钟里，会觉得回收的质量更好。这和波段不是同一回事。急跌之后，日线往往还在左侧往下，短时间内不一定会很快出现波段设置，所以波段不必太急；短线反弹，仍然是等跌完、转过来，再加上确认，才做。",
            ],
          },
        ],
      },
      {
        slug: "false-report-litmus",
        path: "/process/false-report-litmus",
        section: "思考过程",
        title: "误报之后，看谁弹、谁不弹",
        date: "2026-10-11",
        dateLabel: "2026年10月11日",
        shortDateLabel: "10月11日",
        duration: "24分18秒",
        source: "整理自阿豬搵錢日記",
        cardSource: "阿豬搵錢日記",
        summary:
          "一条后来被澄清的利空，像一块照妖镜。四月那次，澄清后能回到原位，是健康的反应；这一次不少 AI 硬件几乎不弹，而有些板块在大跌日还能站住，甚至突破。",
        callout:
          "这是对一次已发生事件的对照整理，不是对后续涨跌的预测，也不是买卖建议。",
        body: [
          {
            heading: "这件事为什么有用",
            paragraphs: [
              "周四有报道称，OpenAI 会达不到一个很高的收入目标，AI 相关的股票当天下午被拖下来。后来看，这个目标并不是 OpenAI 自己定的。对交易来说，这类被澄清的利空像一块照妖镜：先一起跌，再看冷静之后谁能回来、谁回不来。",
            ],
          },
          {
            heading: "和四月那次有什么不同",
            paragraphs: [
              "同年四月下旬也有过类似报道，先卖后，市场冷静、事情被说清楚，价格回到原来附近。那是健康的反应：第一层叙事是错的，纠正之后，回到原位说得通。这一次同样是误报，但不少股票并没有升回去，尤其是 AI 硬件，周五的反弹很小，有些几乎没有。",
            ],
            figures: [
              {
                src: "/images/video-stills/oct11-0827-chart.png",
                alt: "视频截图，纳指期货日线 K 线图：周四急跌后，周五反弹偏弱",
                caption: "视频截图（8:27）。纳指期货日线：周四急跌后，周五的反弹偏弱，收复不了大部分跌幅。",
              },
            ],
          },
          {
            heading: "同时还看到了什么",
            paragraphs: [
              "硬件在卖的时候，另一些板块或个股在周四大部分东西都弱的环境里还能站住，有的还升穿了有意义的关键位置；周五市场稍稳，这类走势能跟着走、再突破。这被看成可能有新趋势在形成，但不知道能持续多久，也不拿它当预测。",
              "指数本身，周五的反弹并不强：收复不了周四跌幅的大部分，收盘还低于当天一半的位置。相对来说，标普、尤其是等权的标普看起来好一些。也有软件股票在周四硬件大跌时已经有动作，周五再跟上、创新高；另一些新云类的名字几乎不弹，有的周五还在跌。同样是误报之后，市场愿意相信的和不愿意相信的，已经分开了。",
            ],
            figures: [
              {
                src: "/images/video-stills/oct11-0915-chart.png",
                alt: "视频截图，等权标普相对市值加权标普（RSP/VOO）的日线图",
                caption: "视频截图（9:15）。等权标普相对市值加权标普（RSP/VOO）的日线，是当时用来比较谁更强的一张图。",
              },
              {
                src: "/images/video-stills/oct11-1411-chart.png",
                alt: "视频截图，GitLab（GTLB）日线 K 线图：价格升穿红色阻力区",
                caption: "视频截图（14:11）。GitLab（GTLB）日线：价格升穿红色阻力区。",
              },
              {
                src: "/images/video-stills/oct11-2109-chart.png",
                alt: "视频截图，Nebius（NBIS）日线 K 线图：误报之后反弹很弱",
                caption: "视频截图（21:09）。Nebius（NBIS）日线：误报之后反弹很弱。",
              },
              {
                src: "/images/video-stills/oct11-2114-chart.png",
                alt: "视频截图，IREN 日线 K 线图：同一时期仍在下跌",
                caption: "视频截图（21:14）。IREN 日线：同一时期仍在下跌。",
              },
            ],
          },
          {
            heading: "气氛不同，同样的强势含义也不同",
            paragraphs: [
              "周四之前，人们已经在追风险；这次下跌把拿错、或拿得太多的人震了一下，剩下的仓位会轻一些。若气氛已经偏贪婪，大家手上货不少，这时再看突破，意义没那么大。若气氛偏差，甚至接近恐惧，还能展示出的强势，或出现的突破，会更有意义。",
            ],
          },
        ],
      },
      {
        slug: "reading-news",
        path: "/mindset/reading-news",
        section: "心态",
        format: "qa",
        title: "一条新闻，不能单独拿来下判断",
        date: "2026-10-29",
        dateLabel: "2026年10月29日",
        shortDateLabel: "10月29日",
        duration: "13分31秒",
        source: "整理自阿豬搵錢日記",
        cardSource: "阿豬搵錢日記",
        summary:
          "只看一条新闻，很难判断它真正的影响。先有假设，再看价格是否确认；不确认，就当假设错了，先不要做。",
        callout:
          "这是一则整理后的心态笔记，重点是面对新闻时的思考过程，不是对某一条消息的交易建议。",
        body: [
          {
            heading: "看到一条重磅新闻，该怎样判断它对市场的影响？",
            paragraphs: [
              "不能只靠这一条。若是几个月没看市场，醒来只看到“要加息”，据此做出的判断往往没有用，甚至是在骗自己。还要问：这件事已经被定价了多少、定价了多久，是新周期还是末段，过去市场已经预告了什么，价格又有过什么反应。",
            ],
          },
          {
            heading: "以前说打仗金价会升，这次不升反跌，该怎么看？",
            paragraphs: [
              "不要死守“A 发生，B 就一定发生”。每一次的环境不同，即便同一类事件，金价也可以升也可以跌。可以先有一个假设，再看价格行动是否确认；确认了，才谈得上有没有交易机会。不确认，就当假设错了，先不要做。",
            ],
          },
          {
            heading: "是不是要把将来说得通，才可以交易？",
            paragraphs: [
              "不是。事先想几种情景，再想要看到什么才能确认。看错和看对的机会可以差不多，但看错时少做或少亏、看中时能多赚一点，就已经够用。",
            ],
          },
        ],
      },
      {
        slug: "shakeout-or-chop",
        path: "/mindset/shakeout-or-chop",
        section: "心态",
        format: "qa",
        title: "不必先判断这是洗盘还是震荡",
        date: "2026-10-21",
        dateLabel: "2026年10月21日",
        shortDateLabel: "10月21日",
        duration: "15分13秒",
        source: "整理自阿豬搵錢日記",
        cardSource: "阿豬搵錢日記",
        summary:
          "没有明显优势时，不必硬预测接下来是洗盘还是继续跌。先想清楚会看到什么才算确认，以及那时的回报对风险够不够。",
        callout:
          "这是一则整理后的心态笔记，重点是思考过程，不是对当时或现在行情的判断。",
        body: [
          {
            heading: "大跌之后又来回震荡，要先判断这是洗盘还是出货吗？",
            paragraphs: [
              "不必。就算猜对了是洗盘还是震荡，本身也没有那么重要。没有明显优势去预测的时候，就不要硬预测。",
            ],
          },
          {
            heading: "那到底在想什么？",
            paragraphs: [
              "先把几种可能摆出来：继续跌，就先不做；若要弹，会看到怎样的价格行动才算确认，那时风险回报够不够。看到确认再动手，并不需要先给这段行情起一个名字。",
            ],
          },
          {
            heading: "已经弹上去了，要不要继续拿？",
            paragraphs: [
              "这才需要另做判断。是不是洗盘，要一只一只看：反弹的速度、能不能很快回到先前的高位附近，还是只弹了一点点、没什么力气。到了这一步，才用这些来决定继续拿还是先走。",
            ],
          },
        ],
      },
      {
        slug: "rotating-narrative",
        path: "/mindset/rotating-narrative",
        section: "心态",
        format: "qa",
        title: "故事换来换去，波段就会更难做",
        date: "2026-10-21",
        dateLabel: "2026年10月21日",
        shortDateLabel: "10月21日",
        duration: "15分13秒",
        source: "整理自阿豬搵錢日記",
        cardSource: "阿豬搵錢日記",
        summary:
          "波段难不难，先看市场升不升、升得稳不稳，以及故事能不能持续。今年叙事更常在板块之间切换，中途就更容易被震走。一年难做，并不等于下一年会更难。",
        callout:
          "这是对做波段难易的整理，不是对下一年成绩的预测。",
        body: [
          {
            heading: "为什么有的年份波段好做，有的年份特别难？",
            paragraphs: [
              "先看市场本身升不升、升得稳不稳。做多头波段，本来就更吃上涨的年份。但只看全年涨幅不够：如果中途大起大落，很容易在中途被震出去。动力能持续得久，拿着早买的股票才坐得住。",
            ],
          },
          {
            heading: "那困难更多是来自故事本身吗？",
            paragraphs: [
              "往往是。若市场长时间围着同一个故事转，板块升得也比较稳、回调也比较温和，就容易拿得住。若故事换来换去，资金一走，股票就跌穿止损。板块全年看上去可能还是升的，但中途已经很容易被震走。",
            ],
          },
          {
            heading: "今年难做，是不是明年就会更难？",
            paragraphs: [
              "不是这样线性推的。一年特别难，往往是因为故事不停变，或市场跌得深；跌深了、走掉的人多了，等它重新起来时，机会不一定更差。反过来，一年人人都赚得顺，东西已经升了很多，下一年未必还能同样顺利。",
            ],
          },
        ],
      },
      {
        slug: "weak-market-setups",
        path: "/mindset/weak-market-setups",
        section: "心态",
        format: "qa",
        title: "大市弱的时候，反而更愿意找个股",
        date: "2026-09-30",
        dateLabel: "2026年9月30日（10月1日发布）",
        shortDateLabel: "9月30日",
        duration: "12分15秒",
        source: "整理自阿豬搵錢日記",
        cardSource: "阿豬搵錢日記",
        summary:
          "做个股时会参考大市，但不是大市弱就完全不做。更偏向在气氛偏怕、指数靠近或跌穿短期支持时，再去看个别股票的设置。",
        callout:
          "这则问答录于 2026 年 9 月 30 日，10 月 1 日发布。这是整理后的心态笔记，不是现在该不该做突破的建议。",
        body: [
          {
            heading: "做个股突破时，要不要看大市？",
            paragraphs: [
              "要看，而且一般会参考市场。只是用法不一定是“大市弱就完全不做”。",
            ],
          },
          {
            heading: "那什么情况下更愿意找个股？",
            paragraphs: [
              "更偏向在大市比较弱、气氛偏怕的时候，比如恐慌贪婪指数到了恐惧或极度恐惧，指数又靠近或跌穿短期支持，再去看个别股票。这些可以是突破，也可以是靠近支持，或在更短的时间框架上转方向。",
            ],
          },
          {
            heading: "大市很强、指数也在突破的时候呢？",
            paragraphs: [
              "那时气氛往往已经到了贪婪附近，再去追同样在破顶的股票，反而会比较少做。这是针对当时那种市场环境的做法；若市场变得非常旺，做法也可以再改。",
            ],
          },
        ],
      },
    ],
  },
]

export const currentMonth = months[0]

export const allNotes: Note[] = months.flatMap((month) => month.notes)

export function getMonthById(id: string) {
  return months.find((month) => month.id === id)
}

export function getMonthByPath(pathname: string) {
  const exact = months.find((month) => month.path === pathname)
  if (exact) return exact
  const noteMonth = months.find((month) =>
    month.notes.some((note) => note.path === pathname),
  )
  return noteMonth ?? months[0]
}

export function getNoteByPath(path: string) {
  return allNotes.find((note) => note.path === path)
}

export function getFeaturedNote(month: MonthArchive = currentMonth) {
  return month.notes.find((note) => note.featured) ?? month.notes[0]
}

export function getMindsetNotes(month: MonthArchive = currentMonth) {
  return month.notes.filter((note) => note.section === "心态")
}

export function getProcessNotes(month: MonthArchive = currentMonth) {
  return month.notes.filter((note) => note.section === "思考过程")
}

export type NavItem = {
  title: string
  path: string
  id: string
}

export type NavGroup = {
  title: string
  items: NavItem[]
}

export function getNav(month: MonthArchive = currentMonth): NavGroup[] {
  const groups: NavGroup[] = [
    {
      title: "本月概览",
      items: [{ title: "首页", path: month.path, id: "home" }],
    },
    {
      title: "Case Study",
      items: month.notes
        .filter((note) => note.section === "Case Study")
        .map((note) => ({
          title: note.title,
          path: note.path,
          id: note.path,
        })),
    },
    {
      title: "思考过程",
      items: month.notes
        .filter((note) => note.section === "思考过程")
        .map((note) => ({
          title: note.title,
          path: note.path,
          id: note.path,
        })),
    },
    {
      title: "心态",
      items: month.notes
        .filter((note) => note.section === "心态")
        .map((note) => ({
          title: note.title,
          path: note.path,
          id: note.path,
        })),
    },
    {
      title: "归档",
      items: months.map((item) => ({
        title: item.label,
        path: item.path,
        id: `archive-${item.id}`,
      })),
    },
  ]
  return groups.filter((group) => group.items.length > 0)
}

export function isNavItemActive(
  item: NavItem,
  pathname: string,
  groupTitle: string,
) {
  if (groupTitle === "归档") {
    return false
  }
  return pathname === item.path
}

export function searchNotes(query: string) {
  const q = query.trim().toLowerCase()
  if (!q) return allNotes
  return allNotes.filter((note) => note.title.toLowerCase().includes(q))
}
