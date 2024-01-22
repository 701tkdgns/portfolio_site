import React, {FC} from 'react'

interface XInterface {
  onClose : () => void;
}

const X : FC<XInterface> = ({onClose}) => {
  return (
    <svg style={{cursor:'pointer'}} onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"/></svg>
  )
}

export default X