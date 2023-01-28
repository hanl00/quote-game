export function cleanQuote(quote?: string): string {
    return quote ? quote.replace(/["]+/g, '').replace(/[\[\]']/g, '').replace(/(\r\n|\n|\r)/gm, "").trim() : '';
}
export function shuffle(array: any) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  