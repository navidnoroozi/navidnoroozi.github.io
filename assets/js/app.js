const projects = [
  {
    id: "dmpc-consensus",
    title: "Distributed MPC for Multi-Agent Consensus (ZeroMQ REQ/REP)",
    category: ["distributed"],
    status: "Recent",
    tags: ["Python", "DMPC", "ZeroMQ", "Consensus", "Multi-agent"],
    summary:
      "Draft work on distributed MPC with a REQ/REP ZeroMQ architecture. Focus: consensus problems for networked agents.",
    highlights: [
      "REQ/REP architecture for distributed optimization iterations",
      "Clear separation of agent solver logic, coordinator, and messaging",
      "Designed for extensibility and reproducible experiments"
    ],
    next: [
      "Add convergence diagnostics and stress-tests (delays, packet loss)",
      "Publish a minimal reproducible demo + docs"
    ]
  },
  {
    id: "dmpc-microgrid",
    title: "Distributed Control for DC Microgrids: Current Sharing via DMPC",
    category: ["distributed", "power"],
    status: "Recent",
    tags: ["Python", "Microgrids", "Current Sharing", "DMPC"],
    summary:
      "Applied distributed control theory to current sharing and voltage regulation in DC microgrids using a distributed MPC setup.",
    highlights: [
      "Demonstrates practical mapping from theory → power systems use case",
      "Emphasizes constraints, stability considerations, and scalability",
      "Architecture designed for distributed execution"
    ],
    next: [
      "Add voltage regulation layer and secondary control scenarios",
      "Benchmark against droop + PI baselines"
    ]
  },
  {
    id: "mpc-converters",
    title: "MPC Python App for Converter Current Control (FS-MPC & PWM-MPC)",
    category: ["power"],
    status: "Recent",
    tags: ["Python", "MPC", "Power Converters", "Finite-set", "PWM"],
    summary:
      "Python application implementing two MPC techniques for current control: finite-set MPC and PWM-based MPC.",
    highlights: [
      "Modular controller interfaces and experiment scripts",
      "Comparative framework (finite-set vs PWM-MPC)",
      "Designed for reuse across converter and drive benchmarks"
    ],
    next: [
      "Add parameter sweep + robustness analysis",
      "Prepare a clean public repo version (sanitized)"
    ]
  },
  {
    id: "pmsm-foc",
    title: "PMSM Speed Control: FOC with MPC Current Controller",
    category: ["drives", "power"],
    status: "Recent",
    tags: ["PMSM", "FOC", "MPC", "Python"],
    summary:
      "Validated MPC current control concepts within a PMSM field-oriented control speed loop.",
    highlights: [
      "Demonstrates drives relevance (automotive powertrain)",
      "Control structure: outer speed loop + inner MPC current loop",
      "Clear benchmark story for electrified mobility"
    ],
    next: [
      "Add constraints (current/voltage) and anti-windup discussion",
      "Compare against PI current control baseline"
    ]
  },
  {
    id: "plecs-cosim",
    title: "PLECS ↔ Python Co-Simulation Prototype (Controller in Python)",
    category: ["cosim", "power"],
    status: "Recent",
    tags: ["PLECS", "Co-simulation", "Python", "Power Stage"],
    summary:
      "Early co-simulation: power stage + load modeled in PLECS; MPC controller executed in Python with a clean interface.",
    highlights: [
      "Practical integration story: modeling + control + tooling",
      "Clear dataflow and timing awareness",
      "Foundation for future real-time oriented experiments"
    ],
    next: [
      "Add logging + deterministic timing measurements",
      "Refine interface into a reusable package"
    ]
  },

  // FUTURE / PLACEHOLDERS
  {
    id: "estimation-ekf-ukf",
    title: "State Estimation for Mechatronic Systems (EKF/UKF) — Planned",
    category: ["future"],
    status: "Planned",
    tags: ["EKF", "UKF", "Observers", "Robustness"],
    summary:
      "Planned project: implement EKF/UKF and compare to classical observers on a mechatronic benchmark (drive or mobile robot).",
    highlights: [
      "Model-based estimation with uncertainty handling",
      "Direct relevance to robotics/autonomy and control robustness"
    ],
    next: [
      "Pick benchmark model + measurement setup",
      "Build reproducible simulation notebook + plots"
    ]
  },
  {
    id: "sensor-fusion",
    title: "Sensor Fusion: Model-Based vs ML-Based Baselines — Planned",
    category: ["future"],
    status: "Planned",
    tags: ["Sensor Fusion", "ML", "Kalman", "Autonomy"],
    summary:
      "Planned project: fuse IMU + odometry + position sensor; compare EKF baseline with a lightweight ML regressor.",
    highlights: [
      "Shows practical engineering trade-offs: interpretability vs accuracy",
      "Useful across robotics, automotive, rail autonomy"
    ],
    next: [
      "Define datasets (simulated first) + evaluation metrics",
      "Add failure cases (dropouts, delay)"
    ]
  },
  {
    id: "fault-tolerance",
    title: "Fault Detection & Graceful Degradation in Control Loops — Planned",
    category: ["future"],
    status: "Planned",
    tags: ["FDI", "Fault Tolerance", "Safety", "Validation"],
    summary:
      "Planned project: inject sensor/actuator faults, detect anomalies, and implement safe fallback behavior.",
    highlights: [
      "High relevance to safety-critical autonomy and industrial systems",
      "Pairs naturally with your validation/co-sim experience"
    ],
    next: [
      "Define fault catalog + detection signals",
      "Implement safe fallback modes and test scenarios"
    ]
  }
];

function el(tag, cls, html) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function renderProjects(filter = "all") {
  if (!grid) return;
  grid.innerHTML = "";

  const filtered = projects.filter(p =>
    filter === "all" ? true : p.category.includes(filter)
  );

  filtered.forEach(p => {
    const card = el("div", "proj");
    card.setAttribute("tabindex", "0");

    card.appendChild(el("div", "proj__title", p.title));
    card.appendChild(el("div", "muted", `${p.status} • ${p.summary}`));

    const meta = el("div", "proj__meta");
    p.tags.slice(0, 6).forEach(t => meta.appendChild(el("span", "tag", t)));
    card.appendChild(meta);

    grid.appendChild(card);
  });
}


// Call this inside init()
function init() {
  // ... your other init code ...
  renderProjects("all");
}

init();
