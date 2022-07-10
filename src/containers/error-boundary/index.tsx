import React, { ErrorInfo } from 'react';

interface Props {
  children?: React.ReactNode;
}

interface ErrorState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends React.Component<Props, ErrorState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { error: error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <>
          <div>Something went wrong</div>
          <div>{`Error is: ${this.state.error?.toString()}`}</div>
          <div>{this.state.errorInfo.componentStack}</div>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
