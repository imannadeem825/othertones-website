function Shows() {
  const currentShowsList = [
    {
        date: Date.now(),
        venue: "The Tabernacle",
        city: "Atlanta, GA, USA",
        description: "Supporting Issues",
        callToAction: (<button style={{ fontFamily: "Lora", fontSize: "16px", borderRadius: "9px", padding: "0.5rem 1.5rem", backgroundColor: "#370617", color: "white", border: "none", fontWeight: "600", letterSpacing: "1px"}}>TICKETS</button>),
    },    
    {
        date: new Date('11-22-2022'),
        venue: "The End",
        city: "Nashville, TN, USA",
        description: "Headliner",
        callToAction: (<button style={{ fontFamily: "Lora", fontSize: "16px", borderRadius: "9px", padding: "0.5rem 1.5rem", backgroundColor: "#370617", color: "white", border: "none", fontWeight: "600", letterSpacing: "1px"}}>TICKETS</button>),
    },
    {
        date: new Date('11-30-2022'),
        venue: "Sydney Opera House",
        city: "Sydney, AU",
        description: "SYDNEY BAYBEE",
        callToAction: (<button style={{ fontFamily: "Lora", fontSize: "16px", borderRadius: "9px", padding: "0.5rem 1.5rem", backgroundColor: "#370617", color: "white", border: "none", fontWeight: "600", letterSpacing: "1px"}}>TICKETS</button>),
    },
  ];

  const getReadableDate = (date) => {
    const newDate = new Date(date);

    const fullMonthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = newDate.getDate();
    const month = newDate.getMonth(); 
    const year = newDate.getFullYear(); 
    return `${fullMonthList[month + 1]} ${day}, ${year}`
  }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems:"center", paddingBottom: "2rem"}}>
          <div style={{width: "85%"}}>
            {
              currentShowsList.map((show) => (
                <div style={{ paddingTop: "2rem", paddingBottom: "1rem", borderBottom: "1px solid white" }} key={show.venue}>
                  {/* TODO: Add Lora fontweights so we can get this boldish :) */}
                    <span style={{ float: "right", marginTop: "1rem" }}>{show.callToAction}</span>
                    <div>
                        <span style={{ fontSize: "24px", fontWeight: "500"}}>{getReadableDate(show.date)}</span>
                    </div>
                    <div>
                        <div style={{ width: "50%", marginLeft: "0" }}>
                            <span style={{ textTransform: "uppercase", fontSize: "20px" }}>{show.venue}</span>
                            <span style={{ float: "right", fontSize: "20px" }}>{show.city}</span>
                        </div>
                    </div>
                    <div style={{ paddingTop: "1rem" }}>
                        <span>{show.description}</span>
                    </div>
                   
                </div>
              ))
            }
          </div>
        </div>
    )
}


export default Shows;