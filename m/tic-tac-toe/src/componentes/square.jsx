export const Square = ({ children, isSelected, updateBoard, index }) => {
    const className =`square ${isSelected ? 'is-selected' : ''}`
    
    const handleCLic = () => {
      updateBoard(index)
    }
  
    return (
      <div onClick={handleCLic} className={className}>
        {children}
      </div>
    )
  }
  