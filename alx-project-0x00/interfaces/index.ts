export interface PillProps {
  title: string
}

export interface ButtonProps{
    title: string,
    styles: {
        sizes: ["small", "medium", "Large"],
        shapes: ["rounded-sm", "rounded-md", "rounded-full"]
    }
}