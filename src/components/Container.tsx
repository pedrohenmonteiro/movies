type ContainerProps = {
  children: React.ReactNode
}

export const Container = ({children}: ContainerProps) => (
  <div className="max-w-[76rem] mx-auto px-4">{children}</div>
)
