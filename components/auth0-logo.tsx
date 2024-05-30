type LogoProps = React.HTMLAttributes<SVGElement>

export function Auth0Logo(props: LogoProps) {
  return (
    <svg fill="currentColor" viewBox="0 0 53 64" {...props}>
      <path d="M3.372 27.782c10.475-1.728 18.686-10.4 20.407-20.892l.577-5.043c.143-.802-.4-1.918-1.412-1.838C15.03.628 7.56 3.243 3.406 4.943A5.488 5.488 0 000 10.027v16.451c0 .973.874 1.717 1.834 1.563l1.538-.252v-.006zM28.831 6.89c1.726 10.492 9.938 19.164 20.407 20.893l1.537.252c.96.16 1.835-.584 1.835-1.563v-16.45a5.488 5.488 0 00-3.406-5.084C45.044 3.232 37.58.622 29.666.004c-1.018-.08-1.538 1.048-1.418 1.837l.577 5.043.006.006zM49.23 32.39C34.915 35.219 28.27 44.75 28.27 62.79c0 .905.897 1.535 1.651 1.031 6.584-4.447 21.07-16.056 22.562-30.577.057-1.826-2.223-.968-3.252-.853zM3.377 32.39c14.315 2.828 20.961 12.359 20.961 30.4 0 .905-.897 1.535-1.651 1.031C16.103 59.374 1.617 47.765.125 33.244c-.057-1.826 2.223-.968 3.252-.853z"></path>
    </svg>
  )
}