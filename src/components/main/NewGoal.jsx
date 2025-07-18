import { useContext, useState } from "react";
import Button from "../shared/Button";
import { useNavigate } from "react-router";
import { Context } from "../../context/Context";

const icons = [
    // 1. Salud y bienestar:
    "🏃‍♂️", // (Ejercicio/Correr)
    "🥗", // (Comer saludable)
    "💧", // (Hidratarse)
    "🧘", // (Meditación / Relajación)
    "🛌", // (Dormir mejor)

    // 2. Trabajo y carrera:
    "💼", // (Trabajo)
    "👨‍💻", // (Desarrollo de habilidades tecnológicas)
    "📚", // (Estudio / Lectura)
    "📊", // (Metas de productividad)

    // 3. Finanzas:
    "💰", // (Ahorrar dinero)
    "📉", // (Reducir gastos)
    "🏦", // (Inversiones)

    // 4. Relaciones personales:
    "❤️", // (Cuidado de relaciones)
    "☎️", // (Llamar a amigos / familia)
    "🎂", // (Recordar cumpleaños)

    // 5. Creatividad y hobbies:
    "🎨", // (Arte)
    "🎸", //  (Música / Instrumentos)
    "📷", //  (Fotografía)
    "✍️", // (Escritura)

    // 6. Viajes y aventuras:
    "✈️", // (Viajes)
    "🏕️", // (Aventuras al aire libre)
    "🏖️", // (Vacaciones)

    // 7. Autodesarrollo:
    "🧠", // (Desarrollo personal)
    "📖", // (Leer libros)
    "🎯", // (Mejora personal)

    // 8. Cuidado del hogar:
    "🧹", // (Limpieza)
    "🏡", // (Tareas del hogar)
    "🌱", // (Cuidado de plantas)
]

const frequencyUnits = [
    "Day",
    "Week",
    "Month",
    "Year",
]

const NewGoal = () => {

    const [form, setForm] = useState({
        goal: "",
        frequency: 0,
        frequencyUnit: "day",
        target: "",
        icon: "🏃‍♂️",
        id: 0
    })
    const navigate = useNavigate();
    const [state, dispatch] = useContext(Context);

    function handleChange(e, prop) {
        setForm(state => ({ ...state, [prop]: e.target.value }));
    }

    function verifyAndFormatForm() {
        if (form.goal === "") { alert("Enter your goal description"); return false; }
        if (form.frequency === "") { alert("Enter the frequency of goal"); return false; }
        if (form.frequency < 1 || form.frequency > 99) { alert("Frequency must be between 1 and 99"); return false; }
        if (form.target === "") { alert("Enter your target"); return false; }
        if (form.target < 1 || form.target > 99) { alert("Target must be between 1 and 99"); return false; }
        form.frequency = removeLeadingZerosRegex(form.frequency);
        form.target = removeLeadingZerosRegex(form.target);
        return true;
    }

    function removeLeadingZerosRegex(str) {
        return str.toString().replace(/^0+(?=\d)/, '');
    }

    function addGoal() {
        if (!verifyAndFormatForm()) return;
        navigate("/Goals-List");
        dispatch({ type: 'create', goal: form });
    }

    return (
        <>
            <div className="w-5/6 top-0 h-full mx-auto lg:w-1/3">
                <div className="bg-gray-400 w-full flex justify-center mx-auto px-4 py-2 rounded-t-xl uppercase font-bold text-gray-100  mt-4">
                    Create your goal
                </div>
                <form action="" className="w-full flex flex-col bg-gray-200 mx-auto px-4 pb-4 pt-2 shadow-md shadow-gray-400">
                    <label className="flex flex-col">
                        <div className="font-bold my-2">Describe your goal</div>
                        <input type="text" name="goal-description" id="goal-description" placeholder="E.g. Running 30 minutes" maxLength={30} className="w-full py-2 px-3 rounded-full bg-gray-100 shadow-inner shadow-gray-400" onChange={e => handleChange(e, 'goal')} />
                    </label>
                    <label className="flex flex-col">
                        <div className="font-bold my-2">How often do you want to meet the goal</div>
                        <div className="flex">
                            <input type="number" name="frequency" id="frequency" className="w-16 mr-5 py-2 px-3 rounded-full bg-gray-100 shadow-inner shadow-gray-400" onChange={e => handleChange(e, 'frequency')} />
                            <select name="frequency-unit" id="frequency-unit" className="w-fit py-2 px-3 rounded-full bg-gray-100 shadow-inner appearance-none shadow-gray-400" onChange={e => handleChange(e, 'frequencyUnit')}>
                                {
                                    frequencyUnits.map(frequencyUnit =>
                                        <option value={frequencyUnit} key={frequencyUnit} >{frequencyUnit}</option>
                                    )
                                }
                            </select>
                        </div>
                    </label>
                    <label className="flex flex-col mr-10">
                        <div className="font-bold my-2">Enter your target goal</div>
                        <input type="number" name="" id="" className="w-16 mr-5 py-2 px-3 rounded-full bg-gray-100 shadow-inner shadow-gray-400" onChange={e => handleChange(e, 'target')} />
                    </label>
                    <label className="flex flex-col">
                        <div className="font-bold"> Select an icon</div>
                        <select name="" id="" className="w-fit py-2 px-3 rounded-full bg-gray-100 shadow-inner appearance-none shadow-gray-400" onChange={e => handleChange(e, 'icon')}>
                            {
                                icons.map(icon =>
                                    <option value={icon} key={icon}>{icon}</option>
                                )
                            }
                        </select>
                    </label>
                </form>
                <div className="bg-gray-400 w-full flex justify-end mx-auto px-4 py-2 rounded-b-xl">
                    <Button
                        label={"Add"}
                        styles={"bg-gray-200"}
                        onClick={addGoal}
                    />
                </div>
            </div>
        </>
    )
}

export default NewGoal
