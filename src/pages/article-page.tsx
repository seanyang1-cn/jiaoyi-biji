import { useEffect, useMemo } from "react"
import { Navigate, useLocation } from "react-router-dom"

import { ArticleToc } from "@/components/article-toc"
import { getNoteByPath } from "@/data/notes"


function ArticleFigures({
  figures,
}: {
  figures?: { src: string; alt: string; caption: string }[]
}) {
  if (!figures?.length) return null
  return (
    <>
      {figures.map((figure) => (
        <figure key={figure.src} className="my-6">
          <img
            src={figure.src}
            alt={figure.alt}
            className="w-full rounded-[var(--radius)] border border-border bg-black object-contain"
          />
          <figcaption className="mt-2 text-sm leading-6 text-muted-foreground">
            {figure.caption}
          </figcaption>
        </figure>
      ))}
    </>
  )
}

function sectionId(index: number) {
  return `section-${index + 1}`
}

export function ArticlePage() {
  const { pathname } = useLocation()
  const note = getNoteByPath(pathname)
  const headings = useMemo(
    () =>
      note
        ? note.body.map((block, index) => ({
            id: sectionId(index),
            text: block.heading,
          }))
        : [],
    [note],
  )
  const showToc = headings.length >= 2

  useEffect(() => {
    if (note) {
      document.title = note.title
    }
  }, [note])

  if (!note) {
    return <Navigate to="/" replace />
  }

  return (
    <div
      className={
        showToc
          ? "relative w-full xl:pr-52"
          : "mx-auto w-full max-w-3xl"
      }
    >
      <article className="mx-auto w-full min-w-0 max-w-3xl">
        <p className="mb-2 text-sm font-medium text-muted-foreground">
          {note.section}
        </p>
        <h1 className="mb-3 text-3xl leading-tight font-semibold tracking-tight max-md:text-2xl">
          {note.title}
        </h1>
        <p className="mb-5 text-sm text-muted-foreground">
          {note.dateLabel} · {note.duration} · {note.source}
        </p>
        {note.callout ? (
          <div className="mb-8 rounded-[var(--radius)] border border-border bg-muted px-[1.125rem] py-4 text-[0.9375rem] leading-[1.65]">
            <p>{note.callout}</p>
          </div>
        ) : null}
        <ArticleFigures figures={note.figures} />
        <div>
          {note.body.map((block, index) => (
            <section key={block.heading}>
              <h2
                id={sectionId(index)}
                className="mt-8 mb-3 flex scroll-mt-24 gap-2 text-xl leading-snug font-semibold tracking-tight"
              >
                {note.format === "qa" ? (
                  <span className="shrink-0 text-muted-foreground">问</span>
                ) : null}
                <span>{block.heading}</span>
              </h2>
              {block.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className={
                    note.format === "qa"
                      ? "mb-4 flex gap-2 text-base leading-[1.75]"
                      : "mb-4 text-base leading-[1.75]"
                  }
                >
                  {note.format === "qa" ? (
                    <>
                      <span className="shrink-0 font-semibold text-muted-foreground">答</span>
                      <span>{paragraph}</span>
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
              {block.list ? (
                <ul className="mb-4 list-disc space-y-[0.35rem] pl-5 text-base leading-[1.75]">
                  {block.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              <ArticleFigures figures={block.figures} />
            </section>
          ))}
        </div>
      </article>
      {showToc ? <ArticleToc items={headings} /> : null}
    </div>
  )
}
