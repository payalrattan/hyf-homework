const input = document.querySelector("#amount");
const selectFrom = document.querySelector("#from-currency");
const selectTo = document.querySelector("#to-currency");
const result = document.querySelector("#result");

 // Store rates globally

async function getData() {
  try {
    const response = await fetch(`https://open.er-api.com/v6/latest/USD`);
    if (!response.ok) {
      throw new Error("Failed to load exchange rates.");
    }

    const data = await response.json();
    console.log(data);
    
    exchangeRates = data.rates;
    const currencyList = Object.keys(exchangeRates);
  
    dropoDowncurrency(currencyList);
    convert(); // Show initial conversion
  } catch (error) {
    alert("Error loading data: " + error.message);
  }
}

function dropoDowncurrency(currencyList) {
  currencyList.forEach(currency => {
    selectFrom.innerHTML += `<option >${currency}</option>`;
    selectTo.innerHTML += `<option >${currency}</option>`;
  });

  selectFrom.value = "EUR";
  selectTo.value = "INR";
}

function convert() {
  const amount = parseFloat(input.value) || 0;
  const from = selectFrom.value;
  const to = selectTo.value;

  const inUSD = amount / exchangeRates[from];
  const converted = inUSD * exchangeRates[to];

  result.textContent = `Converted amount: ${converted.toFixed(2)} ${to}`;
}

// Event listeners for changes
input.addEventListener("input", convert);
selectFrom.addEventListener("change", convert);
selectTo.addEventListener("change", convert);

// Load data on page load
getData();
