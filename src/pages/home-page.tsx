import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

import {
  getFeaturedNote,
  getMindsetNotes,
  getMonthByPath,
  getProcessNotes,
  type Note,
} from "@/data/notes"

function NoteList({ notes }: { notes: Note[] }) {
  return (
    <>
      {notes.map((note) => (
        <Link
          key={note.path}
          to={note.path}
          className="block border-b border-border py-4 first:border-t"
        >
          <p className="mb-1 text-[0.8125rem] text-muted-foreground">
            {note.shortDateLabel} · {note.section}
          </p>
          <h3 className="mb-[0.35rem] text-base leading-snug font-semibold">
            {note.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {note.summary}
          </p>
        </Link>
      ))}
    </>
  )
}

export function HomePage() {
  const { pathname } = useLocation()
  const month = getMonthByPath(pathname)
  const featured = getFeaturedNote(month)
  const processNotes = getProcessNotes(month)
  const mindsetNotes = getMindsetNotes(month)

  useEffect(() => {
    document.title = "交易笔记"
  }, [])

  return (
    <>
      <p className="mb-2 text-sm font-medium text-muted-foreground">
        {month.hero.kicker}
      </p>
      <h1 className="mb-3 text-3xl leading-tight font-semibold tracking-tight max-md:text-2xl">
        {month.hero.title}
      </h1>
      <p className="mb-8 text-[1.0625rem] leading-relaxed text-muted-foreground max-md:mb-6 max-md:text-base">
        {month.hero.lead}
      </p>

      {featured ? (
        <Link
          to={featured.path}
          className="block rounded-[var(--radius)] border border-border bg-background p-6 max-md:p-[1.125rem]"
        >
          <p className="mb-[0.35rem] text-sm font-medium text-muted-foreground">
            {featured.section}
          </p>
          <h2 className="mb-2 text-xl leading-snug font-semibold tracking-tight">
            {featured.title}
          </h2>
          <p className="mb-5 text-sm text-muted-foreground">
            {featured.shortDateLabel} · {featured.duration} · {featured.cardSource}
          </p>
          <p className="mb-5 text-[0.9375rem] leading-[1.65] text-muted-foreground">
            {featured.summary}
          </p>
          <span className="inline-flex h-9 items-center justify-center rounded-[calc(var(--radius)-2px)] bg-primary px-4 text-sm font-medium text-primary-foreground">
            阅读这篇
          </span>
        </Link>
      ) : null}

      {processNotes.length > 0 ? (
        <>
          <p className="mt-8 mb-3 text-sm font-medium text-muted-foreground">
            这个月的思考过程
          </p>
          <NoteList notes={processNotes} />
        </>
      ) : null}

      {mindsetNotes.length > 0 ? (
        <>
          <p className="mt-8 mb-3 text-sm font-medium text-muted-foreground">
            这个月的心态
          </p>
          <NoteList notes={mindsetNotes} />
        </>
      ) : null}
    </>
  )
}
