import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Mic, Wand2, ShieldCheck, Stars } from "lucide-react";
import { useRef } from "react";

export default function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);

  return (
    <section ref={ref} className="relative min-h-[260vh] bg-gradient-to-b from-indigo-50 via-sky-50 to-white overflow-clip">
      {/* Background decorative stars */}
      <motion.div style={{ y: y3, opacity }} className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-10 w-72 h-72 bg-fuchsia-400/20 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-16 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Layer 1: Floating icons */}
      <motion.div style={{ y: y2 }} className="absolute inset-0">
        <Stars className="absolute top-24 left-10 text-indigo-300" size={28} />
        <Sparkles className="absolute top-64 right-10 text-fuchsia-300" size={28} />
        <Wand2 className="absolute bottom-40 left-8 text-sky-300" size={28} />
      </motion.div>

      {/* Hero */}
      <div className="relative z-10 flex flex-col items-center text-center pt-32 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-5xl md:text-7xl font-black tracking-tight text-gray-900"
        >
          MyTales
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
            Personalized stories that listen
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg text-gray-600"
        >
          An AI-powered companion that creates interactive bedtime adventures for children aged 3–9 — with their name, favorite characters, and voice.
        </motion.p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#how" className="bg-gray-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-gray-800 transition">See how it works</a>
          <a href="#cta" className="px-5 py-3 rounded-xl font-semibold bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white shadow-md hover:shadow-lg transition">Try a demo</a>
        </div>
      </div>

      {/* What it is */}
      <motion.div style={{ y: y1 }} id="what" className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 shadow-sm border border-white">
            <h2 className="text-2xl font-bold text-gray-900">What it is</h2>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>Personalized storytelling with names, favorites and preferences</li>
              <li className="flex items-start gap-2"><Mic className="mt-1 text-fuchsia-500" size={18}/> Interactive narration — kids talk, the story adapts</li>
              <li className="flex items-start gap-2"><Wand2 className="mt-1 text-sky-500" size={18}/> AI-generated in real time based on their input</li>
              <li>Child-friendly voice narration</li>
            </ul>
          </div>
          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 shadow-sm border border-white">
            <h3 className="text-2xl font-bold text-gray-900">What it’s for</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>Bedtime stories tailored to each child</li>
              <li>Encourages creativity and imagination</li>
              <li>Supports language development</li>
              <li>Safe, ad-free, privacy-first entertainment</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Features */}
      <motion.div style={{ y: y2 }} id="features" className="relative z-10 mx-auto max-w-6xl px-6 mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Key features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Personalized stories", desc: "Your child becomes the hero of every tale.", icon: Stars },
            { title: "Voice interaction", desc: "Kids talk, the story responds in real time.", icon: Mic },
            { title: "Creative themes", desc: "Unicorns, space adventures, dragons and more.", icon: Wand2 },
            { title: "Professional narration", desc: "Warm, child-friendly voices for bedtime.", icon: Sparkles },
            { title: "Privacy & security", desc: "GDPR compliant. No ads. No data selling.", icon: ShieldCheck },
            { title: "Cross‑platform", desc: "Available on iOS, Android and the web.", icon: Stars },
          ].map((f, i) => (
            <div key={i} className="bg-white/70 backdrop-blur rounded-2xl p-5 border border-white shadow-sm">
              <div className="flex items-center gap-3">
                <f.icon className="text-fuchsia-500" size={20} />
                <h3 className="font-semibold text-gray-900">{f.title}</h3>
              </div>
              <p className="mt-2 text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* How it works */}
      <motion.div style={{ y: y3 }} id="how" className="relative z-10 mx-auto max-w-6xl px-6 mt-20">
        <div className="bg-white/70 backdrop-blur rounded-2xl p-6 border border-white shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900">How it works</h2>
          <ol className="mt-4 grid md:grid-cols-3 gap-6">
            {["Enter the child’s name", "Choose a topic (e.g., ‘A unicorn in space’)", "The AI creates and narrates a personalized story"].map((step, i) => (
              <li key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white text-sm font-bold">
                  {i + 1}
                </span>
                <p className="mt-3 text-gray-800">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-gray-600">The app focuses on child‑friendly storytelling and avoids topics outside of story creation.</p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div id="cta" className="relative z-10 mx-auto max-w-5xl px-6 mt-24 pb-24">
        <div className="rounded-3xl bg-gradient-to-r from-fuchsia-500 to-blue-500 p-[2px] shadow-lg">
          <div className="rounded-3xl bg-white/80 backdrop-blur p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Bring your child’s imagination to life</h3>
                <p className="mt-2 text-gray-700">Try a short, safe demo in your browser—no account required.</p>
              </div>
              <form className="grid sm:grid-cols-3 gap-3">
                <input className="col-span-2 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 bg-white" placeholder="Child’s name" />
                <button type="button" className="px-4 py-3 rounded-xl font-semibold text-white bg-gray-900 hover:bg-gray-800">Start demo</button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
