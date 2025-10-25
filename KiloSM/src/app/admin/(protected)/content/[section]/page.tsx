const ALLOWED_TYPES = new Set<string>([
  'KEYWORD_SEO',
  'ASTROLOGY_LUCK',
  'ONLINE_PLAY',
  'LIVE_RESULTS',
  'NOTICE_BOARD',
  'MARKET_ARTICLES',
  'LATEST_RESULTS',
  'INFO_MARQUEE',
  'STARLINE_GAMES',
  'BAZAR_36',
  'BAZAR_48',
  'LINK_SECTION_1',
  'LINK_SECTION_2',
  'WEEKLY_TIPS_PATTI',
  'WEEKLY_TIPS_LINE',
  'WEEKLY_TIPS_JODI',
  'FREE_GAME_ZONE',
  'USER_CONTENT',
  'CHARTS',
  'FAQ',
  'MARKET_TIMETABLE',
  'QA_SECTION',
  'DISCLAIMER',
])

function toType(slug: string): string {
  return String(slug || '').replace(/-/g, '_').toUpperCase()
}

type Params = { params: { section: string } }

type Result = { status: 'ok'; section: string } | { status: 'error'; error: string }

export default async function AdminSectionModulePage({ params }: Params): Promise<Result> {
  const type = toType(params.section)
  if (!ALLOWED_TYPES.has(type)) {
    return { status: 'error', error: `Unknown section: ${params.section}` }
  }
  return { status: 'ok', section: type }
}