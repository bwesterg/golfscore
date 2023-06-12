const scorecardUrl = "http://127.0.0.1:3000/scorecards/";


export function patchScorecard(updatedScorecard){

    fetch(scorecardUrl + updatedScorecard.id,  {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedScorecard)
        //will need to update this ^^^ to 'scorecard: updatedScorecard' if backend 
        //is updated to use strong params.
    })
}

export function postScorecard(newScorecard){
    fetch(scorecardUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(newScorecard)
        })
}

export function deleteScorecard(id){
    fetch(scorecardUrl + id, {method: "DELETE"} )
}