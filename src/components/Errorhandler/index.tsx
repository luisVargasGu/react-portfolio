import { ErrorBoundaryProps, ErrorBoundaryState } from '@/types'
import React from 'react'

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.error(error)
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error(error)
    console.error(errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <div className="error-message">Something went wrong.</div>
    }

    return this.props.children
  }
}

export default ErrorBoundary
