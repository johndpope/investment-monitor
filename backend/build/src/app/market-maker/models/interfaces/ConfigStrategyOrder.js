"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var IFractionOrder_1 = require("./IFractionOrder");
var IPercentUpdate_1 = require("./IPercentUpdate");
var class_validator_1 = require("class-validator");
var typegoose_1 = require("typegoose");
var MidPriceType;
(function (MidPriceType) {
    MidPriceType["DEFAULT"] = "DEFAULT";
    MidPriceType["LAST_PRICE"] = "LAST_PRICE";
    MidPriceType["PRECISION"] = "PRECISION";
    MidPriceType["MARKET"] = "MARKET";
})(MidPriceType = exports.MidPriceType || (exports.MidPriceType = {}));
var InitialMidPriceType;
(function (InitialMidPriceType) {
    InitialMidPriceType["INSIDE"] = "INSIDE";
    InitialMidPriceType["OUTSIDE"] = "OUTSIDE";
})(InitialMidPriceType = exports.InitialMidPriceType || (exports.InitialMidPriceType = {}));
var ConfigStrategyOrder = /** @class */ (function () {
    function ConfigStrategyOrder() {
        this.execType = 'SPREAD'; //mockado sempre SPREAD
        /**
         * Preço inicial
         */
        this.initialMidPriceType = undefined;
        /**
         * Quantidade de ordens
         */
        this.amountOrders = undefined;
        /**
         * new MaxSpread
         */
        this.defaultSpread = undefined;
        this.orderSize = undefined;
        this.stepSize = undefined;
        this.ordersInterval = undefined;
        this.maxOrders = undefined;
        this.orderSizeAsk = undefined;
        this.orderSizeBid = undefined;
        this.spreadAsk = undefined;
        this.spreadBid = undefined;
        this.stepSizeAsk = undefined;
        this.stepSizeBid = undefined;
        this.midPriceType = undefined;
        this.fractionOrder = new IFractionOrder_1.IFractionOrder();
        this.percentUpdate = new IPercentUpdate_1.IPercentUpdate();
    }
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", String)
    ], ConfigStrategyOrder.prototype, "execType", void 0);
    __decorate([
        class_validator_1.IsDefined(),
        __metadata("design:type", String)
    ], ConfigStrategyOrder.prototype, "initialMidPriceType", void 0);
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.IsDefined(),
        __metadata("design:type", Number)
    ], ConfigStrategyOrder.prototype, "amountOrders", void 0);
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.IsDefined(),
        __metadata("design:type", Number)
    ], ConfigStrategyOrder.prototype, "defaultSpread", void 0);
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.IsDefined(),
        __metadata("design:type", Number)
    ], ConfigStrategyOrder.prototype, "orderSize", void 0);
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.IsDefined(),
        __metadata("design:type", Number)
    ], ConfigStrategyOrder.prototype, "stepSize", void 0);
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.IsDefined(),
        __metadata("design:type", Number)
    ], ConfigStrategyOrder.prototype, "ordersInterval", void 0);
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.IsDefined(),
        __metadata("design:type", Number)
    ], ConfigStrategyOrder.prototype, "maxOrders", void 0);
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.IsDefined(),
        __metadata("design:type", Number)
    ], ConfigStrategyOrder.prototype, "orderSizeAsk", void 0);
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.IsDefined(),
        __metadata("design:type", Number)
    ], ConfigStrategyOrder.prototype, "orderSizeBid", void 0);
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.IsDefined(),
        __metadata("design:type", Number)
    ], ConfigStrategyOrder.prototype, "spreadAsk", void 0);
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.IsDefined(),
        __metadata("design:type", Number)
    ], ConfigStrategyOrder.prototype, "spreadBid", void 0);
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.IsDefined(),
        __metadata("design:type", Number)
    ], ConfigStrategyOrder.prototype, "stepSizeAsk", void 0);
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.IsDefined(),
        __metadata("design:type", Number)
    ], ConfigStrategyOrder.prototype, "stepSizeBid", void 0);
    __decorate([
        class_validator_1.IsEnum(MidPriceType),
        class_validator_1.IsOptional(),
        __metadata("design:type", String)
    ], ConfigStrategyOrder.prototype, "midPriceType", void 0);
    __decorate([
        class_validator_1.IsDefined(),
        class_validator_1.ValidateNested(),
        __metadata("design:type", Object)
    ], ConfigStrategyOrder.prototype, "fractionOrder", void 0);
    __decorate([
        class_validator_1.IsDefined(),
        class_validator_1.ValidateNested(),
        __metadata("design:type", Object)
    ], ConfigStrategyOrder.prototype, "percentUpdate", void 0);
    return ConfigStrategyOrder;
}());
exports.ConfigStrategyOrder = ConfigStrategyOrder;
//# sourceMappingURL=ConfigStrategyOrder.js.map