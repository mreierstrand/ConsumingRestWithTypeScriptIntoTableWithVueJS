import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

interface ITransporter {
    id: Number;
    lastbil: String;
    chaufførNavn: String;
    dato: Number;
    antalKm: Number;
    gennsmsnit: Number;
}

let baseUrl: string = "https://restinmemoryeksempel2.azurewebsites.net/api/transporterTabs"
// let baseUrl: string = "http://localhost:5000/api/TransporterTabs"


new Vue({
    el: "#app",
    data: {
        transporters: [],
        // errorMessage: "",
        formData: {
            id: 0,
            lastbil: "",
            chaufførNavn: "",
            dato: 0,
            antalKm: 0,
            gennsmsnit: 0
        },
        addMessage: "",
        deleteId: "",
        deleteMessage: ""
    },

    methods: {
        getAllTransporters() {
            console.log("getAllTransporters")
            axios.get<ITransporter[]>(baseUrl)
                .then((response: AxiosResponse<ITransporter[]>) => {
                    console.log(response.data)
                    this.transporters = response.data
                })

                .catch((error: AxiosError) => {
                    this.errorMessage = error.message
                })
            
        }
    }

})