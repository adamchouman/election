const apiKey = 'ZFQRN3bQGGNcHeK9WR0l4xzdARvHdqh27KA7FWGF';
const baseUrl = 'https://api.data.gov/v1/candidate/';


export async function fetchCandidateInfo(candidateId) {
    try {
      const response = await fetch(`${baseUrl}${candidateId}/?api_key=${apiKey}`, {
        method: 'GET'
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      
      const data = await response.json();
      return data
    } 
    catch (error) {
      return 'There was a problem with the fetch operation:'
    }
  }

export async function fetchCandidates() {
    try {
        const response = await fetch(`https://api.data.gov/v1/candidates/?api_key=${apiKey}`, {
        method: 'GET'
        });
        
        if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
        }
        
        const data = await response.json();
        return data
    } 
    catch (error) {
        return 'There was a problem with the fetch operation';
    }
}