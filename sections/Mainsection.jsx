import React, { useState } from "react";


export const Mainsection = () => {
    const [activity, setActivity] = useState(null);
    const [choice, setChoice] = useState("");
    const fetchRandomActivity = async () => {
        try {
            let apiUrl = "https://bored-api.appbrewery.com/random";
            if (choice) {
                console.log(apiUrl);
                apiUrl = `https://bored-api.appbrewery.com/filter?type=${choice}`;
            }
            const response = await fetch(apiUrl);
            console.log(response);
            if (!response.ok) {
                throw new Error("Faile to fetch api");
            }
            const data = await response.json();
            setActivity(data);
        } catch (error) {}
    };
    return (
        <section className={"h-screen bg-black flex flex-col  items-center"}>
            <h1 className="text-3xl mt-40 font-bold text-red-500">
                Random activity generator
            </h1>
            <div>
                <select
                    className="text-3xl mt-5"
                    id="Activity-type"
                    value={choice}
                    onChange={(e) => setChoice(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="social">Social</option>
                    <option value="education">Education</option>
                    <option value="recreational">Recreational</option>
                    <option value="diy">DIY</option>
                    <option value="charity">Charity</option>
                    <option value="cooking">Cooking</option>
                    <option value="music">Music</option>
                    <option value="busywork">Busywork</option>
                </select>
            </div>
            <button
                className="bg-blue-800 mt-5 py-4 px-2 rounded-2xl text-white"
                onClick={fetchRandomActivity}
            >
                Get Random Activity
            </button>
            {activity && (
                <div className="border-black border-2 rounded-2xl px-3 py-3 mt-10 font-bold">
                    <h2 className="text-xl text-yellow-500">
                        The activities you can perform with the friends are:
                    </h2>
                    <div className="text-green-400">
                        <h2>{activity.activity}</h2>
                        <h2>type:{activity.type}</h2>
                        <h2>participants:{activity.participants}</h2>
                        <h2>price:{activity.price}</h2>
                    </div>
                </div>
            )}
        </section>
    );
};
