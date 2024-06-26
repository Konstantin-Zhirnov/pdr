import { useEffect, useRef, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const portalRef = useRef<HTMLDivElement | null>(null)

  if (!portalRef.current) {
    portalRef.current = document.createElement('div')
  }

  useEffect(() => {
    const currentPortalRef = portalRef.current
    if (currentPortalRef) {
      document.body.appendChild(currentPortalRef)
    }

    return () => {
      if (currentPortalRef) {
        document.body.removeChild(currentPortalRef)
      }
    }
  }, [])

  return portalRef.current ? createPortal(children, portalRef.current) : null
}

export default Portal
