import * as React from "react"

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "div" : "button"

    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

    const variants = {
      default: "bg-primary-500 text-white hover:bg-primary-600",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary-500 text-white hover:bg-secondary-600",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    }

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    }

    const variantStyle = variants[variant] || variants.default
    const sizeStyle = sizes[size] || sizes.default

    const buttonClassName = `${baseStyles} ${variantStyle} ${sizeStyle} ${className || ""}`

    return <Comp className={buttonClassName} ref={ref} {...props} />
  },
)

Button.displayName = "Button"

export { Button }
