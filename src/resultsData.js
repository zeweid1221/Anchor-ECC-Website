export const resultCards = [
  {
    key: "local",
    label: "Local detection",
    value: "TPR 0.997-0.998",
    detail: "At delta = 20, block FAR ranges from 0.002 to 0.075 across all three models.",
  },
  {
    key: "quality",
    label: "Adaptive generation",
    value: "18.0-23.4% lower PPL",
    detail: "At delta = 20, adaptive realization consistently reduces conditional PPL across model families.",
  },
  {
    key: "global",
    label: "Global verification",
    value: "AUC 0.995–1.000",
    detail: "Final-text-only verification against matched unwatermarked outputs and human LFQA answers.",
  },
  {
    key: "cw",
    label: "Anchor-ECC vs. CW",
    value: "0.075 FAR at delta = 20",
    detail: "Anchor-ECC reaches 0.997 TPR; CW-4 reaches 0.829 TPR with 0.138 FAR.",
  },
  {
    key: "llm",
    label: "LLM-guided edits",
    value: "0.919 TPR",
    detail: "Across 72 balanced delta = 20 Qwen3 edits; the full evaluation contains N = 144.",
  },
];

export const localDetection = [
  { model: "Qwen3-8B", delta: 2, tolerance: 2, feasible: 1.78, tpr: 0.2621, far: 0.0839, coverage: 0.5103 },
  { model: "Qwen3-8B", delta: 5, tolerance: 1, feasible: 6.84, tpr: 0.5217, far: 0.2107, coverage: 0.6106 },
  { model: "Qwen3-8B", delta: 20, tolerance: 0, feasible: 16.71, tpr: 0.9966, far: 0.0754, coverage: 0.7811 },
  { model: "Mistral-7B", delta: 2, tolerance: 2, feasible: 1.70, tpr: 0.2630, far: 0.0851, coverage: 0.5108 },
  { model: "Mistral-7B", delta: 5, tolerance: 1, feasible: 5.34, tpr: 0.5443, far: 0.2119, coverage: 0.5874 },
  { model: "Mistral-7B", delta: 20, tolerance: 0, feasible: 17.93, tpr: 0.9978, far: 0.0071, coverage: 0.8009 },
  { model: "OPT-125M", delta: 2, tolerance: 2, feasible: 6.56, tpr: 0.1843, far: 0.0115, coverage: 0.6134 },
  { model: "OPT-125M", delta: 5, tolerance: 1, feasible: 15.26, tpr: 0.3366, far: 0.0162, coverage: 0.7576 },
  { model: "OPT-125M", delta: 20, tolerance: 0, feasible: 18.00, tpr: 0.9980, far: 0.0025, coverage: 0.8023 },
];

export const generationQuality = [
  { model: "Qwen3-8B", setting: "Unwatermarked", feasible: null, conditionalPpl: 1.96, unconditionalPpl: 4.58 },
  { model: "Qwen3-8B", setting: "delta = 2", feasible: 1.84, conditionalPpl: 23.36, unconditionalPpl: 28.44 },
  { model: "Qwen3-8B", setting: "delta = 5", feasible: 6.99, conditionalPpl: 33.38, unconditionalPpl: 39.66 },
  { model: "Qwen3-8B", setting: "delta = 20", feasible: 16.74, conditionalPpl: 80.74, unconditionalPpl: 91.67 },
  { model: "Mistral-7B", setting: "Unwatermarked", feasible: null, conditionalPpl: 2.07, unconditionalPpl: 4.49 },
  { model: "Mistral-7B", setting: "delta = 2", feasible: 1.66, conditionalPpl: 11.28, unconditionalPpl: 18.23 },
  { model: "Mistral-7B", setting: "delta = 5", feasible: 5.08, conditionalPpl: 15.59, unconditionalPpl: 23.62 },
  { model: "Mistral-7B", setting: "delta = 20", feasible: 17.93, conditionalPpl: 60.73, unconditionalPpl: 77.80 },
  { model: "OPT-125M", setting: "Unwatermarked", feasible: null, conditionalPpl: 3.21, unconditionalPpl: 15.32 },
  { model: "OPT-125M", setting: "delta = 2", feasible: 6.28, conditionalPpl: 20.93, unconditionalPpl: 43.50 },
  { model: "OPT-125M", setting: "delta = 5", feasible: 14.87, conditionalPpl: 33.52, unconditionalPpl: 59.68 },
  { model: "OPT-125M", setting: "delta = 20", feasible: 18.00, conditionalPpl: 72.18, unconditionalPpl: 113.57 },
];

export const adaptiveAblation = [
  { model: "Qwen3-8B", delta: 2, reduction: 0.027949 },
  { model: "Qwen3-8B", delta: 5, reduction: 0.145258 },
  { model: "Qwen3-8B", delta: 20, reduction: 0.180207 },
  { model: "Mistral-7B", delta: 2, reduction: 0.012160 },
  { model: "Mistral-7B", delta: 5, reduction: 0.128352 },
  { model: "Mistral-7B", delta: 20, reduction: 0.190351 },
  { model: "OPT-125M", delta: 2, reduction: 0.158121 },
  { model: "OPT-125M", delta: 5, reduction: 0.226736 },
  { model: "OPT-125M", delta: 20, reduction: 0.234126 },
];

export const globalVerification = [
  { model: "Qwen3-8B", delta: 2, auc: 0.9954, tprAtZeroFpr: 0.9336, wm: 0.383, llm: 0.262, human: 0.244 },
  { model: "Qwen3-8B", delta: 5, auc: 1.0000, tprAtZeroFpr: 1.0000, wm: 0.483, llm: 0.262, human: 0.244 },
  { model: "Qwen3-8B", delta: 20, auc: 1.0000, tprAtZeroFpr: 1.0000, wm: 0.799, llm: 0.262, human: 0.244 },
  { model: "Mistral-7B", delta: 2, auc: 1.0000, tprAtZeroFpr: 0.9961, wm: 0.387, llm: 0.261, human: 0.245 },
  { model: "Mistral-7B", delta: 5, auc: 1.0000, tprAtZeroFpr: 1.0000, wm: 0.458, llm: 0.261, human: 0.245 },
  { model: "Mistral-7B", delta: 20, auc: 1.0000, tprAtZeroFpr: 1.0000, wm: 0.806, llm: 0.261, human: 0.244 },
  { model: "OPT-125M", delta: 2, auc: 0.9994, tprAtZeroFpr: 0.9844, wm: 0.487, llm: 0.284, human: 0.275 },
  { model: "OPT-125M", delta: 5, auc: 1.0000, tprAtZeroFpr: 1.0000, wm: 0.764, llm: 0.284, human: 0.275 },
  { model: "OPT-125M", delta: 20, auc: 1.0000, tprAtZeroFpr: 1.0000, wm: 0.922, llm: 0.284, human: 0.274 },
];

export const combinatorialComparison = [
  { pattern: "CW-AB", delta: 2, eccTpr: 0.2621, eccFar: 0.0839, cwTpr: 0.8025, cwFar: 0.8051 },
  { pattern: "CW-AB", delta: 5, eccTpr: 0.5217, eccFar: 0.2107, cwTpr: 0.7703, cwFar: 0.7754 },
  { pattern: "CW-AB", delta: 20, eccTpr: 0.9966, eccFar: 0.0754, cwTpr: 0.3863, cwFar: 0.1093 },
  { pattern: "CW-4", delta: 2, eccTpr: 0.2621, eccFar: 0.0839, cwTpr: 0.9626, cwFar: 1.0000 },
  { pattern: "CW-4", delta: 5, eccTpr: 0.5217, eccFar: 0.2107, cwTpr: 0.9619, cwFar: 0.9964 },
  { pattern: "CW-4", delta: 20, eccTpr: 0.9966, eccFar: 0.0754, cwTpr: 0.8290, cwFar: 0.1378 },
];

export const llmEditResults = [
  { delta: 5, intent: "Benign", n: 36, editedBlocks: 6.00, tpr: 0.8380, far: 0.2153, coverage: 0.5088 },
  { delta: 5, intent: "Malicious", n: 36, editedBlocks: 5.50, tpr: 0.8131, far: 0.1489, coverage: 0.3422 },
  { delta: 20, intent: "Benign", n: 36, editedBlocks: 5.44, tpr: 0.9337, far: 0.0951, coverage: 0.5520 },
  { delta: 20, intent: "Malicious", n: 36, editedBlocks: 5.22, tpr: 0.9043, far: 0.0891, coverage: 0.4608 },
];
