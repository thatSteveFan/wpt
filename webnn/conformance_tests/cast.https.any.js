// META: title=test WebNN API cast operation
// META: global=window,dedicatedworker
// META: variant=?cpu
// META: variant=?gpu
// META: script=../resources/utils.js
// META: timeout=long

'use strict';

// https://webmachinelearning.github.io/webnn/#api-mlgraphbuilder-cast

runWebNNConformanceTests('cast', buildCast);
