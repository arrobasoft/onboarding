export const Square = ({ children, isSelected, updateBoard, index }) => {
    const className =`square ${isSelected ? 'is-selected' : ''}`
    const handleCLic = () => {
      updateBoard()
    }
  
    return (
      <div onClick={handleCLic} className="square">
        {children}
      </div>
    )
  }
  