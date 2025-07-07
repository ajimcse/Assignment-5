function showSectionById(id){
    document.getElementById('Donation-section').classList.add('hidden');
    document.getElementById('History-section').classList.add('hidden');
  
    document.getElementById(id).classList.remove('hidden')
}