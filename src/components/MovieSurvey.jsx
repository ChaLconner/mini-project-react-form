import { useState } from "react";
import { InputField } from "../components/InputField";
import { RadioGroup } from "../components/RadioGroup";
import { TextArea } from "../components/TextArea";
import { UserInfo } from "../components/UserInfo";
import { MovieSelection } from "../components/MovieSelection";
import { Comments } from "../components/Comments";
import { Actions } from "../components/Actions";

export default function MovieSurvey() {
    const [formData, setFormData] = useState({ name: "", email: "", movie: "", comments: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleReset = () => {
        setFormData({ name: "", email: "", movie: "", comments: "" });
        setSubmitted(false);
    };

    const movieOptions = [
        { title: "Avatar (2009)", director: "James Cameron" },
        { title: "Inception (2010)", director: "Christopher Nolan" },
        { title: "Interstellar (2014)", director: "Christopher Nolan" },
        { title: "The Shawshank Redemption (1994)", director: "Frank Darabont" },
        { title: "Pulp Fiction (1994)", director: "Quentin Tarantino" },
        { title: "Parasite (2019)", director: "Bong Joon-ho" }
    ];


    return (
        <main className="min-h-screen p-6 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
            <div className="bg-white w-full rounded-b-lg shadow-md max-w-md">
                <div className="flex flex-col space-y-1.5 p-6 bg-gradient-to-r from-purple-700 to-indigo-600 text-white">
                    <h2 className="font-semibold tracking-tight flex items-center gap-2 text-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-film h-6 w-6"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>Movie Survey</h2>
                </div>
                {submitted ? (
                    <div className="p-6 space-y-6 pt-6">
                        <div className="rounded-lg bg-green-50 p-4 border border-green-200">
                            <h3 className="text-lg font-medium text-green-800 flex items-center gap-2 mb-4 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-600"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>ส่งแบบสำรวจสำเร็จ!</h3>
                            <div className="space-y-3">
                                <UserInfo name={formData.name} email={formData.email} />                                
                                <MovieSelection  movie={formData.movie} />
                                <Comments comments={[formData.comments]} />
                            </div>

                        </div>
                        <Actions onReset={handleReset} />

                    </div>


                ) : (
                    <form onSubmit={handleSubmit} className="p-6 space-y-6 pt-6">
                        <InputField
                            label="ชื่อ"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="กรุณากรอกชื่อของคุณ"
                            required
                        />
                        <InputField
                            label="อีเมล"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@email.com"
                            required
                        />
                        <RadioGroup
                            label="เลือกหนังที่คุณชอบ"
                            name="movie"
                            options={movieOptions}
                            selectedValue={formData.movie}
                            onChange={handleChange}
                        />
                        <TextArea
                            label="ความคิดเห็นเกี่ยวกับหนัง"
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                            placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
                        />
                        <div className="items-center flex justify-between border-t border-t-gray-200 pt-4">
                            <div className="flex justify-between gap-2">
                                <button
                                    class="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-gray-200 border-input bg-background hover:bg- hover:text-accent-foreground h-10 px-4 py-2 flex items-center gap-1 hover:bg-gray-100 hover:cursor-pointer"
                                    type="button" onClick={handleReset}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-refresh-cw h-4 w-4">
                                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                                        <path d="M21 3v5h-5"></path>
                                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                                        <path d="M8 16H3v5"></path>
                                    </svg>รีเซ็ต</button>
                            </div>
                            <div >                                
                                <button className="flex justify-between items-center bg-gradient-to-r from-purple-700 to-indigo-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 gap-1 hover:cursor-pointer" type="submit" onClick={handleSubmit}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-send h-4 w-4">
                                    <path
                                        d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z">
                                    </path>
                                    <path d="m21.854 2.147-10.94 10.939"></path>
                                </svg>
                                    ส่งแบบสำรวจ
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </main>
    );
}