/*
  Problem Map: "Why can't AI teach a person on its own, from start to finish?"
  Content follows the explainer video script (English cut, 2026-11-10).
  Desktop: mind-map graph (root in the center, four layers in the four corners).
  Narrow screens: stacked layer columns.
*/
(function () {
	var LAYERS = [
		{ id: 1, name: "Understanding the content", q: "Does AI know what counts as teaching?" },
		{ id: 2, name: "Understanding the learner", q: "Does AI know who you are and where you're stuck?" },
		{ id: 3, name: "Tutor-learner relationship", q: "Will the learner treat it as a tutor?" },
		{ id: 4, name: "Institutions", q: "Will schools, parents and hospitals let it teach?" }
	];
	var LAYER_COLOR = { 1: "#2C5BDB", 2: "#23A845", 3: "#EE8600", 4: "#D42F4A" };

	var STATUS = {
		testing: { label: "Testing", cls: "st-test", color: "#1AC93A", hint: "being tested in experiments now" },
		design:  { label: "In design", cls: "st-design", color: "#3FA9FF", hint: "the next study is being designed" },
		open:    { label: "Open", cls: "st-open", color: "#BDBDBD", hint: "no answer yet" },
		future:  { label: "Future", cls: "st-future", color: "#B98CFF", hint: "a direction, not started" }
	};

	var CARDS = {
		"card-drclara": "Dr. Clara: VR patient educator",
		"card-pedlayer": "Presence is not pedagogy",
		"card-teachback": "Teach-back with an LLM judge",
		"card-proxemics": "Life-sized VR health coaches",
		"card-pbl": "AI PBL Agent",
		"card-keyi": "Keyi",
		"card-fpa": "First Principle Agent"
	};

	var NODES = [
		{ id: "1.1", layer: 1, title: "Content ≠ pedagogy", status: "testing",
		  symptom: "Hand a book to an AI and ask for a course: you get the book cut by chapter, a summary each, a few questions at the end. It looks like a course and studies like a table of contents.",
		  take: "Good teaching has its own logic: concrete before abstract, plant an anchor and reason outward from it, put a step exactly where students will stumble. None of that is in the raw material, which follows the structure of the knowledge, not the order of learning. So I stopped cutting by chapter. First the material becomes a graph of concepts and prerequisites; then that graph goes into a library of a few dozen teaching patterns, and the AI picks which patterns fit this concept and this audience. Decide how to teach before deciding what to say. The common belief is that one good prompt is enough; my position is the opposite, and it is being tested in experiments right now.",
		  related: ["card-pedlayer", "card-pbl", "card-keyi"] },
		{ id: "1.2", layer: 1, title: "Matching the medium to the learner", status: "open",
		  symptom: "Ask for a version for adults, for children, for patients: the tone and vocabulary change, the form does not.",
		  take: "Which content reaches which person in which form (text, a diagram, an animation, a dialogue, a 3D model, or doing it with their own hands) is a decision, not a phrasing. I paid tuition for this one. An early project of mine was a no-code VR teaching builder for teachers, built on the belief that fancier and more is better. Teachers did not say they didn't want it; they said they could not fit it into a lesson, and could not tell what their students had learned from it. Good is not matched, and more is not matched. The project became Keyi, where 3D is one medium among several, combined with explanation, diagrams and quizzes.",
		  related: ["card-keyi", "card-drclara"] },
		{ id: "1.3", layer: 1, title: "Can tell ≠ can teach", status: "testing",
		  symptom: "A doctor reviews an AI-written patient handout and finds nothing wrong. The patient still cannot learn from it.",
		  take: "My PhD research is in patient education, where the audience is usually anxious people who know nothing about medicine. The content can be correct and still not teach. Look at what models learned from: \"what is this\", \"is this right\" and \"why\" exist in uncountable quantities, but \"how do you lead someone who knows nothing to discover this, step by step\" is almost never written down. The path in a tutor's head rarely makes it onto paper. So AI is strong on teaching content and unreliable on teaching logic. It can tell; that is not the same as being able to teach.",
		  related: ["card-drclara", "card-pedlayer"] },
		{ id: "2.1", layer: 2, title: "Learners are different", status: "open",
		  symptom: "AI explains equally well, and equally badly, to everyone. It does not know who in the room will get stuck at which step.",
		  take: "This is where I hit the wall hardest. We built a life-sized virtual human to teach patients face to face and compared a paper handout, the agent on a desktop screen, and the agent in VR. People clearly preferred the agent, and VR scored highest; learning did not differ between the three. The post-mortem pointed at what we had ignored: patients differ in health literacy and prior knowledge, yet the agent said almost the same thing to everyone. Liking went up, learning did not. That is not a failed system; it is the textbook result of shallow personalization, and it pushed us to go deeper.",
		  related: ["card-drclara", "card-pedlayer"] },
		{ id: "2.2", layer: 2, title: "Static profile vs dynamic probing", status: "design", key: true,
		  symptom: "Tell an AI you like basketball and it explains the immune system with basketball. You end up more confused.",
		  take: "In my view the most important node on the map. Nobody arrives with an empty head (Piaget, Ausubel and Freire all say it in their own words): something new is learned only when it hooks onto the net a learner already carries. A profile tells you someone likes basketball; it does not tell you what their understanding of basketball is. A fan who loves the stands and the scoreboard and a player who reads defenses both \"like basketball\", but only the player's net lines up with an immune system built on detection, coordination and memory. You only find out by probing while you teach. The direction I am designing now is co-constructed analogy: the patient and the virtual human build an analogy together, test it, revise it, and mark where it stops holding. Learner modeling happens inside the act of building, while medical correctness stays with the clinician. The step after that is having the virtual human act out the analogy with its gestures.",
		  related: [] },
		{ id: "2.3", layer: 2, title: "AI can't see the whole learner", status: "future",
		  symptom: "It only sees what you type. \"I get it\": a tutor never fully believes it, an AI has to.",
		  take: "Most traces of learning are multimodal and real-time: a frown, a pause, a sentence read twice, a question rephrased and asked again. Text is exactly the channel students hide behind most easily. One level deeper, today's AI has no world model of this particular learner, so it guesses from a thin slice and the state it infers is biased. Teach-back, where the agent asks people to explain in their own words and reteaches what is missing, is one small way to stop taking \"I get it\" at face value. Which signals truly diagnose understanding is still only a direction.",
		  related: ["card-teachback", "card-drclara"] },
		{ id: "2.4", layer: 2, title: "Aligning with the learner's growth", status: "future",
		  symptom: "AI only has a memory that replays old logs. It stores the words, not the person.",
		  take: "Cognition, knowledge, agency, mood, even values all shift; what worked three months ago may be wrong today. A good tutor keeps up because the tutor is always there. Reading back through chat logs and watching someone grow are two different things. I am sketching a small theory of personalized influence over time: an intervention's effect depends on the person's current state, context and history, and the intervention in turn changes the person it acts on. Learning can be brief; growth is always long.",
		  related: [] },
		{ id: "3.1", layer: 3, title: "Two dimensions of trust", status: "open",
		  symptom: "The same explanation: from a human tutor, learners listen carefully; from an AI, they coast, as if it were a game or an app.",
		  take: "Relational trust (I feel you care about me) is something people can build with machines; my lab has spent twenty years on relational agents. Authority trust (you are qualified to judge whether I learned, and bluffing you has consequences) is what learners mostly withhold from AI. Our virtual humans delivered the relational half: liking and engagement rose, and people even stood closer to a VR coach after a rapport-building conversation. Learning did not rise with it. Making AI more humanlike solves only half of the trust problem; the other half comes from role and consequences.",
		  related: ["card-proxemics", "card-drclara"] },
		{ id: "3.2", layer: 3, title: "Timely intervention", status: "design",
		  symptom: "AI either talks nonstop or answers only when asked. Help too much and the learning stays shallow; help too little and the learner quits.",
		  take: "Learning hurts: building a new schema, finding the old one won't connect, tearing it down and starting over. A good tutor's skill is knowing when to step in, and how much. Is this learner stuck or thinking? Give the answer now, or wait a little longer? Learners are not good at asking for help: they stay quiet when they should ask, and ask for the answer when they shouldn't. In our VR study, participants almost never asked a content question; nearly everything they said was \"continue\". I am working on this node in two directions. The first is timing: when to step in with a question, and when to stay quiet and wait, because silence is a teaching move too. The second is the how: a virtual human has a body, so an intervention does not have to be spoken. It can walk over, tap the step on the board, or act out an analogy with its hands. These moves are lighter than a hint and closer to what a real tutor does. When they actually help is what I want to study next.",
		  related: ["card-drclara", "card-pedlayer", "card-teachback"] },
		{ id: "3.3", layer: 3, title: "Motivating the other 95%", status: "open",
		  symptom: "Handed an AI, most people just ask it for the answer. Learning tools tend to work for the few who use them as intended.",
		  take: "Picture a teacher who walks into the classroom, sits in the back row, and waits for students to come and ask. A few will; most won't. So the problem is not whether the tool exists; it is whether the person wants to learn. The self-driven few will learn with anything you give them, a sheet of paper included, which means the people AI helps most easily are exactly the people who need it least. If AI is to build a tutor-learner relationship, the job is everyone else: find their motivation, and keep it alive. Outside campus I work on this with middle schoolers directly: they build games with AI, put them in front of real players, and iterate, because a game puts real feedback within reach at their age.",
		  related: ["card-fpa", "card-pbl"] },
		{ id: "3.4", layer: 3, title: "Tutor authority", status: "open",
		  symptom: "A tutor can say \"we're not covering that today\". An AI cannot, or cannot make it stick.",
		  take: "Deciding what to teach, when, and what not to hand a student yet is part of teaching, not a side concern. Guardrails set in advance can always be talked around. Authority comes from role and from situation: role gives it a floor, and the situation sets what it is worth right now. AI has a grip on neither: no stable role, and it misreads the situation. A small step I have tried: in my K-12 work, the AI companion's allowed moves change with the teaching step (no answers during discovery, no ghost-writing during creation).",
		  related: ["card-pbl"] },
		{ id: "4.1", layer: 4, title: "Privacy and safety", status: "open",
		  symptom: "AI stores everything by default and cannot weigh what matters.",
		  take: "A good tutor knows a child's family troubles do not belong in the hallway and a patient's test results go to the patient alone. That sense of discretion is not written in a rulebook; it grows out of the role. AI runs on rules written in advance, and wherever the rules don't reach it does not know what to do. A tutor with no sense of discretion, however well they explain, is not someone parents will trust with their child. This is a precondition for AI being allowed to teach at all.",
		  related: [] },
		{ id: "4.2", layer: 4, title: "Available ≠ adopted", status: "open",
		  symptom: "Bought and unused, never in the timetable.",
		  take: "A tool existing is not the same as a tool being used. The previous layer asked whether an individual learner wants to learn; this one is about institutions. Schools buy AI tools and teachers don't open them; a system gets built and never makes it into the timetable. Adoption is a question of institutions and habits, not features. This is the layer where I learned the most and published the least: building tools with K-12 teachers outside campus, where the AI proposes and the teacher has the final say.",
		  related: ["card-pbl", "card-keyi"] }
	];

	/* Mind-map layout, in a 1400 x 1000 canvas (centers). */
	var POS = {
		root: [700, 500],
		L1: [400, 290], L2: [1000, 290], L3: [1000, 710], L4: [400, 710],
		"1.1": [160, 110], "1.2": [470, 92], "1.3": [150, 330],
		"2.1": [930, 92], "2.2": [1240, 110], "2.3": [1255, 270], "2.4": [1255, 440],
		"3.1": [1240, 570], "3.2": [1255, 730], "3.3": [1240, 890], "3.4": [930, 908],
		"4.1": [150, 670], "4.2": [470, 908]
	};
	var W = 1400, H = 1000;

	function icon(key) { return "images/pmap/pm_" + key.replace(".", "_") + ".png"; }
	function pct(x, total) { return (x / total * 100).toFixed(3) + "%"; }
	function byId(id) { return NODES.filter(function (n) { return n.id === id; })[0]; }

	function nodeButton(n, cls) {
		var S = STATUS[n.status];
		var b = document.createElement("button");
		b.type = "button";
		b.className = cls;
		b.setAttribute("data-node", n.id);
		b.style.setProperty("--lc", LAYER_COLOR[n.layer]);
		b.innerHTML = '<img class="pi" src="' + icon(n.id) + '" alt="">' + '<span class="nt"><span class="nid">' + n.id + "</span> " + n.title + (n.key ? ' <span class="key">&#9733;</span>' : "") +
			'</span><span class="st ' + S.cls + '" title="' + S.label + ": " + S.hint + '"></span>';
		b.addEventListener("click", function () { showNode(n.id, false); });
		return b;
	}

	function renderGraph() {
		var host = document.getElementById("pgraph");
		if (!host) return;
		var NS = "http://www.w3.org/2000/svg";
		var svg = document.createElementNS(NS, "svg");
		svg.setAttribute("viewBox", "0 0 " + W + " " + H);
		svg.setAttribute("preserveAspectRatio", "none");
		svg.setAttribute("class", "pg-lines");
		function line(a, b, cls, color) {
			var l = document.createElementNS(NS, "line");
			l.setAttribute("x1", a[0]); l.setAttribute("y1", a[1]);
			l.setAttribute("x2", b[0]); l.setAttribute("y2", b[1]);
			l.setAttribute("class", cls);
			if (color) l.setAttribute("stroke", color);
			svg.appendChild(l);
			return l;
		}
		LAYERS.forEach(function (L) {
			line(POS.root, POS["L" + L.id], "pg-trunk", LAYER_COLOR[L.id]);
		});
		NODES.forEach(function (n) {
			var l = line(POS["L" + n.layer], POS[n.id], "pg-branch", LAYER_COLOR[n.layer]);
			l.setAttribute("data-edge", n.id);
		});
		host.appendChild(svg);

		function place(el, key) {
			el.style.left = pct(POS[key][0], W);
			el.style.top = pct(POS[key][1], H);
			host.appendChild(el);
		}
		var root = document.createElement("div");
		root.className = "pg-root";
		root.innerHTML = '<img class="ri" src="' + icon("root") + '" alt="">' + "<small>The root question</small>Why can't AI teach a person on its own, from start to finish?<span class=\"rnote\">Teaching on its own = the whole job of a competent tutor</span>";
		place(root, "root");

		LAYERS.forEach(function (L) {
			var hub = document.createElement("div");
			hub.className = "pg-hub";
			hub.style.background = LAYER_COLOR[L.id];
			hub.innerHTML = '<img class="hi" src="' + icon("L" + L.id) + '" alt="">' + '<span class="ln">Layer ' + L.id + "</span>" + L.name + '<span class="lq">' + L.q + "</span>";
			place(hub, "L" + L.id);
		});
		NODES.forEach(function (n) {
			place(nodeButton(n, "pnode pg-leaf"), n.id);
		});
	}

	function renderColumns() {
		var host = document.getElementById("pmap-layers");
		if (!host) return;
		LAYERS.forEach(function (L) {
			var col = document.createElement("div");
			col.className = "pmap-layer l" + L.id;
			col.innerHTML = '<div class="pmap-layer-head"><img class="hi" src="' + icon("L" + L.id) + '" alt=""><span class="ln">LAYER ' + L.id + "</span>" + L.name + "</div>";
			var list = document.createElement("div");
			list.className = "pmap-nodes";
			NODES.filter(function (n) { return n.layer === L.id; }).forEach(function (n) {
				list.appendChild(nodeButton(n, "pnode"));
			});
			col.appendChild(list);
			host.appendChild(col);
		});
	}

	function renderLegend() {
		var host = document.getElementById("pmap-legend");
		if (!host) return;
		host.innerHTML = Object.keys(STATUS).map(function (k) {
			var S = STATUS[k];
			return '<span><i class="st ' + S.cls + '"></i>' + S.label + ": " + S.hint + "</span>";
		}).join("") + '<span><span class="key">&#9733;</span> the node I consider most important</span>';
	}

	// Story video: chapter start times (seconds) and the moment each map node begins
	var VIDEO_CHAPTERS = [
		{t: 0, label: "Intro", c: "#999"},
		{t: 71, label: "Nobody says it can teach", c: "#999"},
		{t: 199, label: "Telling is free, learning is not", c: "#999"},
		{t: 274, label: "The four layers", c: "#999"},
		{t: 323, label: "Layer 1: Content", layer: 1},
		{t: 581, label: "Layer 2: Learner", layer: 2},
		{t: 943, label: "Layer 3: Relationship", layer: 3},
		{t: 1291, label: "Layer 4: Institutions", layer: 4},
		{t: 1385, label: "The whole map", c: "#999"},
		{t: 1409, label: "Why the long haul", c: "#999"},
		{t: 1599, label: "Closing", c: "#999"}
	];
	var NODE_TIME = {
		"1.1": 331, "1.2": 414, "1.3": 501,
		"2.1": 590, "2.2": 670, "2.3": 838, "2.4": 887,
		"3.1": 955, "3.2": 1040, "3.3": 1133, "3.4": 1237,
		"4.1": 1301, "4.2": 1355
	};
	function fmtTime(t) { var m = Math.floor(t / 60), s = t % 60; return m + ":" + (s < 10 ? "0" : "") + s; }
	function seekVideo(t) {
		var v = document.getElementById("story-video-el");
		if (!v) return;
		document.getElementById("story-video").scrollIntoView({ behavior: "smooth", block: "center" });
		var go = function () { try { v.currentTime = t; } catch (e) {} var p = v.play(); if (p && p.catch) p.catch(function () {}); };
		if (v.readyState >= 1) go(); else { v.addEventListener("loadedmetadata", go, { once: true }); v.load(); }
	}
	function renderChapters() {
		var box = document.getElementById("sv-chapters");
		var v = document.getElementById("story-video-el");
		if (!box || !v) return;
		box.innerHTML = VIDEO_CHAPTERS.map(function (ch, i) {
			var col = ch.layer ? LAYER_COLOR[ch.layer] : ch.c;
			return '<button type="button" class="sv-chap" data-seek="' + ch.t + '" data-chap="' + i + '" style="border-left-color:' + col + '"><span class="t">' + fmtTime(ch.t) + "</span>" + ch.label + "</button>";
		}).join("");
		var last = -1;
		v.addEventListener("timeupdate", function () {
			var cur = 0;
			for (var i = 0; i < VIDEO_CHAPTERS.length; i++) if (v.currentTime >= VIDEO_CHAPTERS[i].t) cur = i;
			if (cur === last) return;
			last = cur;
			box.querySelectorAll(".sv-chap").forEach(function (b) { b.classList.toggle("now", +b.getAttribute("data-chap") === cur); });
		});
	}

	function showNode(id, scroll) {
		var n = byId(id);
		if (!n) return;
		var L = LAYERS[n.layer - 1];
		var S = STATUS[n.status];
		document.querySelectorAll(".pnode").forEach(function (b) {
			b.classList.toggle("active", b.getAttribute("data-node") === id);
		});
		document.querySelectorAll(".pg-branch").forEach(function (l) {
			l.classList.toggle("active", l.getAttribute("data-edge") === id);
		});
		var d = document.getElementById("pmap-detail");
		var rel = n.related.length
			? n.related.map(function (c) { return '<button type="button" class="jump-btn" data-jump="' + c + '">' + CARDS[c] + " &#8595;</button>"; }).join("")
			: '<span class="pd-none">' + (n.status === "design" ? "Next research direction; no project card yet." : "No project yet. This one is on the map as a question.") + "</span>";
		d.innerHTML =
			'<div class="pd-head"><img class="pd-icon" src="' + icon(n.id) + '" alt=""><span>' + n.id + " &middot; " + n.title + "</span>" +
			'<span class="pd-chip" style="background:' + LAYER_COLOR[n.layer] + '">Layer ' + n.layer + ": " + L.name + "</span>" +
			'<span class="pd-chip status" style="background:' + S.color + '">' + S.label + "</span></div>" +
			'<div class="pd-label">Symptom</div><div class="pd-symptom">' + n.symptom + "</div>" +
			'<div class="pd-label">My take</div><div class="pd-take">' + n.take + "</div>" +
			'<div class="pd-label">Related work</div><div class="pd-related">' + rel + "</div>" +
			(NODE_TIME[n.id] !== undefined ? '<div class="pd-label">In the video</div><div class="pd-related"><button type="button" class="jump-btn watch-btn" data-seek="' + NODE_TIME[n.id] + '">&#9654; Watch this part (' + fmtTime(NODE_TIME[n.id]) + ")</button></div>" : "");
		if (scroll) d.scrollIntoView({ behavior: "smooth", block: "center" });
	}

	function jumpToCard(id) {
		var card = document.getElementById(id);
		if (!card) return;
		var all = document.getElementById("works-button-all");
		var delay = 0;
		if (all && !all.classList.contains("selected")) { all.click(); delay = 150; }
		setTimeout(function () {
			card.scrollIntoView({ behavior: "smooth", block: "center" });
			card.classList.remove("flash");
			void card.offsetWidth;
			card.classList.add("flash");
			clearTimeout(card._flashTimer);
			card._flashTimer = setTimeout(function () { card.classList.remove("flash"); }, 3800);
		}, delay);
	}

	document.addEventListener("click", function (e) {
		var sk = e.target.closest("[data-seek]");
		if (sk) { e.preventDefault(); seekVideo(+sk.getAttribute("data-seek")); return; }
		var j = e.target.closest("[data-jump]");
		if (j) { e.preventDefault(); jumpToCard(j.getAttribute("data-jump")); return; }
		var g = e.target.closest("[data-goto-node]");
		if (g) { e.preventDefault(); showNode(g.getAttribute("data-goto-node"), true); }
	});

	document.addEventListener("DOMContentLoaded", function () {
		renderGraph();
		renderColumns();
		renderLegend();
		renderChapters();
		var deep = location.hash.match(/^#node-([0-9.]+)$/);
		showNode(deep && byId(deep[1]) ? deep[1] : "2.2", false);
		if (deep && byId(deep[1])) {
			setTimeout(function () { showNode(deep[1], true); }, 400);
		}
		document.querySelectorAll(".grid-item").forEach(function (item) {
			if (!item.querySelector("video")) item.classList.add("still");
		});
		document.querySelectorAll('.grid-item-link[href="#"]').forEach(function (a) {
			a.addEventListener("click", function (e) { e.preventDefault(); });
		});
	});

	window.addEventListener("hashchange", function () {
		var m = location.hash.match(/^#node-([0-9.]+)$/);
		if (m && byId(m[1])) showNode(m[1], true);
	});

	window.ProblemMap = { show: showNode, jump: jumpToCard };
})();
