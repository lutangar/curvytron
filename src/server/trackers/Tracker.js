/**
 * Tracker
 *
 * @param {Inspector} inspector
 * @param {String} id
 */
function Tracker (inspector, id)
{
    EventEmitter.call(this);

    this.inspector = inspector;
    this.id        = id;
    this.creation  = new Date();
    this.uniqId    = this.creation.getTime() + '-' + this.id;
}

Tracker.prototype = Object.create(EventEmitter.prototype);
Tracker.prototype.constructor = Tracker;

/**
 * Destroy tracker
 *
 * @return {Tracker}
 */
Tracker.prototype.destroy = function()
{
    return this;
};

/**
 * Get duration
 *
 * @return {Number}
 */
Tracker.prototype.getDuration = function()
{
    return new Date() - this.creation;
};

/**
 * Object version of the tracker
 *
 * @return {Object}
 */
Tracker.prototype.serialize = function()
{
    return {
        id: this.uniqId,
        duration: this.getDuration()
    };
};
