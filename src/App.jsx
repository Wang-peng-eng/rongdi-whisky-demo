import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Boxes,
  CircleHelp,
  Clock3,
  Compass,
  Database,
  FileText,
  Home,
  Layers3,
  LayoutGrid,
  MessageSquareText,
  Mic,
  Newspaper,
  PenLine,
  Play,
  Search,
  Sparkles,
  Wine
} from "lucide-react";
import {
  asset,
  channelTemplates,
  faqs,
  processPillars,
  products,
  storyBlocks
} from "./content";

const navItems = [
  { id: "home", label: "首页", icon: Home },
  { id: "story", label: "品牌故事", icon: BookOpen },
  { id: "products", label: "产品体系", icon: Boxes },
  { id: "faq", label: "FAQ知识库", icon: CircleHelp },
  { id: "generator", label: "内容生成模拟", icon: Sparkles }
];

const tone = {
  amber: "border-amber-200 bg-amber-50 text-amber-950",
  cyan: "border-cyan-200 bg-cyan-50 text-cyan-950",
  emerald: "border-emerald-200 bg-emerald-50 text-emerald-950",
  orange: "border-orange-200 bg-orange-50 text-orange-950",
  rose: "border-rose-200 bg-rose-50 text-rose-950"
};

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function App() {
  const [active, setActive] = useState("home");
  const Page = {
    home: HomePage,
    story: StoryPage,
    products: ProductsPage,
    faq: FAQPage,
    generator: GeneratorPage
  }[active];

  return (
    <main className="min-h-screen bg-[#f6f3ee] text-zinc-950">
      <Header active={active} setActive={setActive} />
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <Page setActive={setActive} />
      </div>
    </main>
  );
}

function Header({ active, setActive }) {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-[#f6f3ee]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <button
          className="flex items-center gap-3 text-left"
          onClick={() => setActive("home")}
          type="button"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-white shadow-sm">
            <Wine size={20} />
          </span>
          <span>
            <span className="block text-xs font-semibold tracking-[0.22em] text-zinc-500">
              品牌内容作品集
            </span>
            <span className="block text-base font-bold text-zinc-950">
              荣帝威士忌内容体系中心
            </span>
          </span>
        </button>

        <nav className="flex gap-1 overflow-x-auto rounded-2xl border border-zinc-200 bg-white/82 p-1.5 shadow-sm">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                className={cx(
                  "flex min-w-fit items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition",
                  isActive
                    ? "bg-zinc-950 text-white shadow-sm"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
                )}
                key={item.id}
                onClick={() => setActive(item.id)}
                type="button"
              >
                <Icon size={16} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

function HomePage({ setActive }) {
  return (
    <div className="space-y-12">
      <section className="relative isolate min-h-[680px] overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-950 px-6 py-10 text-white shadow-sm sm:px-10 lg:px-14 lg:py-16">
        <div className="absolute inset-0 -z-20">
          <img
            alt="荣帝酿造体系背景"
            className="h-full w-full object-cover opacity-34"
            src={asset("e934566e-ae0d-4312-ba00-260f576d0fd4.png")}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,0.95)_0%,rgba(9,9,11,0.82)_42%,rgba(9,9,11,0.28)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(20,184,166,0.24),transparent_32rem)]" />
        </div>

        <div className="max-w-3xl">
          <div className="mb-8 flex flex-wrap gap-2.5">
            <HeroPill icon={Database} label="品牌资料结构化" />
            <HeroPill icon={Layers3} label="五款产品矩阵" />
            <HeroPill icon={Award} label="2026 IWSC素材背书" />
          </div>

          <p className="mb-5 text-sm font-semibold tracking-[0.28em] text-teal-200">
            来自青岛的山海之酿
          </p>
          <h1 className="text-balance text-5xl font-bold tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">
            荣帝威士忌
            <span className="block text-white/78">内容体系中心</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-light leading-9 text-zinc-200 sm:text-xl">
            一个品牌官网级内容作品集 Demo：把荣帝的风土故事、产品体系、FAQ知识和渠道表达，整理成可展示、可复用、可运营的内容资产系统。
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-zinc-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-100"
              onClick={() => setActive("story")}
              type="button"
            >
              进入内容体系
              <ArrowRight size={17} />
            </button>
            <button
              className="inline-flex items-center gap-2 rounded-2xl border border-white/18 bg-white/8 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/14"
              onClick={() => setActive("products")}
              type="button"
            >
              查看产品矩阵
            </button>
          </div>
        </div>

        <div className="absolute bottom-36 right-7 hidden w-[42%] max-w-[540px] gap-3 lg:grid lg:grid-cols-5">
          {products.map((product, index) => (
            <div
              className="group overflow-hidden rounded-2xl border border-white/16 bg-white/10 p-2 backdrop-blur transition hover:-translate-y-1 hover:bg-white/16"
              key={product.slug}
            >
              <div className="aspect-[3/4] overflow-hidden rounded-xl bg-white/90">
                <img
                  alt={`${product.shortName}原始产品素材`}
                  className="h-full w-full object-contain"
                  src={product.original}
                />
              </div>
              <p className="mt-2 truncate text-center text-xs font-semibold text-white/86">
                {String(index + 1).padStart(2, "0")}
              </p>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-zinc-950/72 backdrop-blur">
          <div className="grid max-w-3xl grid-cols-3">
            <HeroMetric value="5" label="核心产品线" />
            <HeroMetric value="4" label="渠道表达模板" />
            <HeroMetric value="88" label="IWSC评审分数" />
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <ModuleCard
          icon={BookOpen}
          title="品牌故事"
          body="起源、定位、理念与关键词，形成稳定的品牌叙事骨架。"
          onClick={() => setActive("story")}
        />
        <ModuleCard
          icon={Boxes}
          title="产品体系"
          body="五款产品按风味、桶型、强度和场景建立内容矩阵。"
          onClick={() => setActive("products")}
        />
        <ModuleCard
          icon={CircleHelp}
          title="FAQ知识库"
          body="把消费者问题转化为售前教育、售后服务和直播答疑素材。"
          onClick={() => setActive("faq")}
        />
        <ModuleCard
          icon={MessageSquareText}
          title="内容生成模拟"
          body="基于同一套产品资产，输出多渠道内容表达。"
          onClick={() => setActive("generator")}
        />
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Panel className="p-8 lg:p-10">
          <p className="section-kicker">内容体系主轴</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em]">
            从品牌资料到内容资产
          </h2>
          <div className="mt-8 space-y-6">
            {[
              "青岛山海风土",
              "崂山深层地下水",
              "双蒸馏与风味桶",
              "中国威士忌被世界看见"
            ].map((item, index) => (
              <div className="flex gap-5" key={item}>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-zinc-950 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-zinc-950">{item}</h3>
                  <p className="mt-2 text-sm font-light leading-7 text-zinc-600">
                    可用于品牌故事、短视频选题、直播话术和FAQ解释的核心内容素材。
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel className="overflow-hidden p-0">
          <img
            alt="荣帝酿造体系素材"
            className="h-[460px] w-full object-cover object-top"
            src={asset("e934566e-ae0d-4312-ba00-260f576d0fd4.png")}
          />
        </Panel>
      </section>
    </div>
  );
}

function StoryPage() {
  return (
    <div className="space-y-10">
      <Intro
        eyebrow="品牌故事"
        title="把品牌长文拆成可复用的叙事资产。"
        body="品牌故事页不堆资料，而是把真实文案拆成起源、定位、理念、关键词和工艺证据。"
      />

      <section className="grid gap-7 lg:grid-cols-3">
        {storyBlocks.map((block) => (
          <Panel className="p-8" key={block.title}>
            <p className="section-kicker">{block.title}</p>
            <h2 className="mt-4 text-2xl font-bold tracking-[-0.025em]">
              {block.kicker}
            </h2>
            <p className="mt-5 text-sm font-light leading-8 text-zinc-600">
              {block.body}
            </p>
          </Panel>
        ))}
      </section>

      <section className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {processPillars.map((pillar, index) => (
          <Panel className="p-7" key={pillar.title}>
            <div className="flex items-center gap-4">
              <IconBox>
                {index % 3 === 0 ? (
                  <Compass size={20} />
                ) : index % 3 === 1 ? (
                  <Layers3 size={20} />
                ) : (
                  <Clock3 size={20} />
                )}
              </IconBox>
              <h3 className="text-lg font-bold">{pillar.title}</h3>
            </div>
            <p className="mt-5 text-sm font-light leading-7 text-zinc-600">
              {pillar.body}
            </p>
            <TagList tags={pillar.tags} />
          </Panel>
        ))}
      </section>
    </div>
  );
}

function ProductsPage() {
  return (
    <div className="space-y-10">
      <Intro
        eyebrow="产品体系"
        title="五款产品，按内容运营逻辑重新分层。"
        body="不把SKU当货架展示，而是按风味、桶型、强度、饮用场景和传播角度建立产品内容地图。"
      />

      <section className="grid gap-7 md:grid-cols-2 xl:grid-cols-5">
        {products.map((product, index) => (
          <ProductCard key={product.slug} product={product} index={index} />
        ))}
      </section>

      <section className="grid gap-7 lg:grid-cols-4">
        <Taxonomy
          icon={Wine}
          title="风味"
          items={["香草蜂蜜", "青苹果奶油", "坚果果干", "红果单宁"]}
        />
        <Taxonomy
          icon={Clock3}
          title="强度"
          items={["40%vol", "46%vol", "60%vol桶强", "六年陈酿"]}
        />
        <Taxonomy
          icon={Layers3}
          title="桶型"
          items={["美国白橡木", "雪莉桶", "Palo Cortado", "勃艮第红酒桶"]}
        />
        <Taxonomy
          icon={LayoutGrid}
          title="场景"
          items={["入门", "礼赠", "高阶品鉴", "直播成交"]}
        />
      </section>
    </div>
  );
}

function FAQPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const key = query.trim().toLowerCase();
    if (!key) return faqs;
    return faqs.filter((item) =>
      [item.category, item.q, item.a, item.operation]
        .join(" ")
        .toLowerCase()
        .includes(key)
    );
  }, [query]);

  return (
    <div className="space-y-10">
      <Intro
        eyebrow="FAQ知识库"
        title="把消费者疑问变成内容资产。"
        body="FAQ知识库承担三件事：降低理解门槛、支持直播答疑、沉淀售后服务口径。"
        action={
          <div className="relative w-full max-w-sm">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
              size={18}
            />
            <input
              className="w-full rounded-2xl border border-zinc-200 bg-white py-4 pl-11 pr-4 text-sm outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜索：酒精度 / 保存 / 桶型"
              value={query}
            />
          </div>
        }
      />

      <section className="grid gap-7 lg:grid-cols-2">
        {filtered.map((item) => (
          <Panel className="p-8" key={item.q}>
            <span className="inline-flex rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-semibold text-zinc-600">
              {item.category}
            </span>
            <h2 className="mt-5 text-2xl font-bold tracking-[-0.02em]">
              {item.q}
            </h2>
            <p className="mt-5 text-sm font-light leading-8 text-zinc-600">
              {item.a}
            </p>
            <div className="mt-7 rounded-2xl border border-teal-100 bg-teal-50 p-5 text-sm font-medium leading-7 text-teal-900">
              {item.operation}
            </div>
          </Panel>
        ))}
      </section>
    </div>
  );
}

function GeneratorPage() {
  const [productName, setProductName] = useState("帕洛科塔多桶强");
  const product = useMemo(
    () => matchProduct(productName) ?? products[2],
    [productName]
  );
  const outputs = useMemo(
    () => [
      {
        title: "公众号标题",
        icon: Newspaper,
        body: channelTemplates.official({ product })
      },
      {
        title: "小红书文案",
        icon: PenLine,
        body: channelTemplates.xhs({ product })
      },
      {
        title: "短视频脚本",
        icon: Play,
        body: channelTemplates.video({ product })
      },
      {
        title: "直播话术",
        icon: Mic,
        body: channelTemplates.live({ product })
      }
    ],
    [product]
  );

  return (
    <div className="space-y-10">
      <Intro
        eyebrow="内容生成模拟"
        title="同一套产品资产，转换为不同渠道表达。"
        body="这个模块展示内容运营方法：先匹配产品资产，再选择公众号、小红书、短视频和直播话术模板。"
      />

      <section className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr]">
        <Panel className="p-8">
          <label className="text-sm font-bold text-zinc-800">产品名称</label>
          <input
            className="mt-3 w-full rounded-2xl border border-zinc-200 px-4 py-4 text-base font-bold outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
            onChange={(event) => setProductName(event.target.value)}
            value={productName}
          />
          <div className="mt-5 flex flex-wrap gap-2.5">
            {products.map((item) => (
              <button
                className={cx(
                  "rounded-full px-4 py-2 text-sm font-semibold transition",
                  item.slug === product.slug
                    ? "bg-zinc-950 text-white"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                )}
                key={item.slug}
                onClick={() => setProductName(item.shortName)}
                type="button"
              >
                {item.shortName}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <ProductImage product={product} index={products.indexOf(product)} compact />
          </div>
        </Panel>

        <Panel className="p-8">
          <p className="section-kicker">已匹配产品资产</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em]">
            {product.shortName}
          </h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <AssetLine label="风味词" value={product.flavor.join(" / ")} />
            <AssetLine label="桶型信息" value={product.cask} />
            <AssetLine label="场景" value={product.scenes.join(" / ")} />
            <AssetLine label="传播角度" value={product.contentAngle} />
          </div>
        </Panel>
      </section>

      <section className="grid gap-7 lg:grid-cols-2">
        {outputs.map((output) => {
          const Icon = output.icon;
          return (
            <Panel className="p-8" key={output.title}>
              <div className="mb-5 flex items-center gap-4">
                <IconBox>
                  <Icon size={20} />
                </IconBox>
                <h3 className="text-2xl font-bold tracking-[-0.02em]">
                  {output.title}
                </h3>
              </div>
              <p className="whitespace-pre-line text-sm font-light leading-8 text-zinc-600">
                {output.body}
              </p>
            </Panel>
          );
        })}
      </section>
    </div>
  );
}

function Intro({ eyebrow, title, body, action }) {
  return (
    <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <p className="section-kicker">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-[-0.045em] text-zinc-950 sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base font-light leading-8 text-zinc-600">
          {body}
        </p>
      </div>
      {action}
    </div>
  );
}

function Panel({ children, className = "" }) {
  return (
    <section
      className={cx(
        "rounded-3xl border border-zinc-200/82 bg-white/92 shadow-[0_1px_0_rgba(24,24,27,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(24,24,27,0.08)]",
        className
      )}
    >
      {children}
    </section>
  );
}

function HeroPill({ icon: Icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs font-semibold text-white/86 backdrop-blur">
      <Icon size={15} />
      {label}
    </span>
  );
}

function HeroMetric({ value, label }) {
  return (
    <div className="border-r border-white/10 px-6 py-5 last:border-r-0">
      <div className="text-3xl font-bold">{value}</div>
      <div className="mt-1 text-sm font-light text-zinc-300">{label}</div>
    </div>
  );
}

function ModuleCard({ icon: Icon, title, body, onClick }) {
  return (
    <button
      className="group rounded-3xl border border-zinc-200 bg-white/92 p-7 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(24,24,27,0.08)]"
      onClick={onClick}
      type="button"
    >
      <IconBox>
        <Icon size={20} />
      </IconBox>
      <h3 className="mt-7 text-2xl font-bold tracking-[-0.025em]">{title}</h3>
      <p className="mt-3 text-sm font-light leading-7 text-zinc-600">{body}</p>
    </button>
  );
}

function ProductCard({ product, index }) {
  return (
    <Panel className="overflow-hidden">
      <div className="p-4">
        <ProductImage product={product} index={index} />
      </div>
      <div className="border-t border-zinc-200 px-6 pb-7 pt-6">
        <p className="text-xs font-semibold tracking-[0.18em] text-zinc-400">
          {product.abv} · {product.volume}
        </p>
        <h2 className="mt-3 text-xl font-bold tracking-[-0.02em]">
          {product.shortName}
        </h2>
        <p className="mt-3 text-sm font-light leading-7 text-zinc-600">
          {product.line}
        </p>
        <div className="mt-5 space-y-4">
          <Info label="风味" value={product.flavor.slice(0, 4).join(" / ")} />
          <Info label="桶型" value={product.cask} />
          <Info label="场景" value={product.scenes.join(" / ")} />
        </div>
      </div>
    </Panel>
  );
}

function ProductImage({ product, index, compact = false }) {
  return (
    <div className={cx("overflow-hidden rounded-2xl border", tone[product.color])}>
      <div className={cx("bg-white", compact ? "h-64" : "h-72")}>
        <img
          alt={`${product.shortName}原始产品素材`}
          className="h-full w-full object-contain"
          src={product.original}
        />
      </div>
      <div className="flex items-center justify-between border-t border-current/10 px-4 py-3">
        <span className="text-xs font-semibold">原始素材</span>
        <span className="text-xs font-semibold opacity-60">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

function Taxonomy({ icon: Icon, title, items }) {
  return (
    <Panel className="p-7">
      <IconBox>
        <Icon size={20} />
      </IconBox>
      <h3 className="mt-6 text-2xl font-bold tracking-[-0.025em]">{title}</h3>
      <TagList tags={items} />
    </Panel>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.16em] text-zinc-400">
        {label}
      </p>
      <p className="mt-1.5 text-sm font-light leading-6 text-zinc-700">{value}</p>
    </div>
  );
}

function AssetLine({ label, value }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5">
      <p className="text-xs font-semibold tracking-[0.16em] text-zinc-400">
        {label}
      </p>
      <p className="mt-2 text-sm font-light leading-7 text-zinc-700">{value}</p>
    </div>
  );
}

function TagList({ tags }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2.5">
      {tags.map((tag) => (
        <span
          className="rounded-full bg-zinc-100 px-3.5 py-2 text-xs font-semibold text-zinc-600"
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function IconBox({ children }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-800">
      {children}
    </span>
  );
}

function matchProduct(input) {
  const key = input.trim().toLowerCase();
  if (!key) return null;
  return products.find((product) =>
    [product.name, product.shortName, product.style, product.cask]
      .join(" ")
      .toLowerCase()
      .includes(key)
  );
}
