function Square(props) {
  //console.log(props.squareParams);
  const isOpen = props.squareParams.open ? "open" : "";

  if(props.squareParams.hasOwnProperty('pieceType')) {
    switch(props.squareParams.pieceType) {
      case "E":
        return <div className={`piece elephant ${props.squareParams.direction} ${isOpen}`} onClick={() => props.onClick()}></div>
        break;
      case "M":
        return <div className={`piece mountain ${isOpen}`} onClick={() => props.onClick()}></div>
        break;
      case "R":
        return <div className={`piece rhinoceros ${props.squareParams.direction} ${isOpen}`} onClick={() => props.onClick()}></div>
        break;
      default:
        return <div className={`empty-square ${isOpen}`} onClick={() => props.onClick()}></div>;
    }
  }

  return <div className={`empty-square ${isOpen}`} onClick={() => props.onClick()}></div>;
}

export default Square;
