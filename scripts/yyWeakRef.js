// **********************************************************************************************************************
// 
// Copyright (c)2020, YoYo Games Ltd. All Rights reserved.
// 
// File:            yyWeakRef.js
// Created:         24/07/2020
// Author:          MikeR
// Project:         HTML5
// Description:     
// 
// Date				Version		BY		Comment
// ----------------------------------------------------------------------------------------------------------------------
// 24/07/2020		
// 
// **********************************************************************************************************************

/**
 * Whether the browser supports {@link WeakRef}
 */
const WEAKREF_SUPPORTED = ('WeakRef' in window);

/**
 * Constructor for the yyWeakRef object
 */
class yyWeakRef {

    /** @type {boolean} */
    __yyIsGMLObject = true;

    /** @type {string} */
    __type = "[weakref]";

    /** @type {WeakRef<Object>?} */
    pWeakRef = null;

    gmlref = {
        enumerable: true,
        get: () => {

            if (this.pWeakRef == null) {
                return undefined;
            }

            return this.pWeakRef.deref();
        }
    };

    constructor() {}

    /**
     * Returns whether the weak reference is still alive.
     * @returns {boolean|undefined}
     */
    IsRefAlive = () => {

        if (this.pWeakRef == null) {
            return undefined;
        }

        if (this.pWeakRef.deref() == undefined) {
            return false;
        }

        return true;
    };

    /**
     * 
     * @param {Object} pRef 
     */
    SetReference = (pRef) => {

        if (!WEAKREF_SUPPORTED) {
            this.pWeakRef = null;
            return;
        }

        this.pWeakRef = new WeakRef(pRef);
        
    };


}

/**
 * With this function you can create a weak reference to a struct which can then be used to check if
 * the struct is still "alive" (referenced) or not in the game. You supply the reference to the
 * struct you want to track, and the function will return another struct which is a weak reference
 * to that struct.
 * 
 * @param {Object|Function} structToTrack 
 * @returns {yyWeakRef}
 */
function weak_ref_create(structToTrack) {

    if (structToTrack == undefined) {
        yyError("incorrect number of arguments to weak_ref_create");
    }
        
    if ((typeof structToTrack != "object") && (typeof (structToTrack) != "function")) {
        yyError("invalid argument passed to weak_ref_create");
    }

    var weakref = new yyWeakRef();
    weakref.SetReference(structToTrack);

    return weakref;

}

/**
 * @param {yyWeakRef} pWeakRef 
 * @returns 
 */
function weak_ref_alive(pWeakRef) {

    if (pWeakRef == undefined) {
        yyError("incorrect number of arguments to weak_ref_alive");
    }

    if (pWeakRef instanceof yyWeakRef) {
        return pWeakRef.IsRefAlive();
    }

    return undefined;
    
}

/**
 * 
 * @param {Array<yyWeakRef>} _array Array containing weak references to the structs that you want to check.
 * @param {number} [_index] The index into the array to start checking from.
 * @param {number} [_length] The number of positions, starting from the given index, to check for.
 * @returns {boolean|undefined}
 */
function weak_ref_any_alive(_array, _index, _length)
{
    if (_array == undefined)
    {
        yyError("incorrect number of arguments to weak_ref_any_alive");
    }
    else if (Array.isArray(_array) == false)
    {
        yyError("first argument to weak_ref_any_alive is not an array");        
    }
    else
    {
        var index = 0;
        var length = _array.length;

        if (_index != undefined)
        {
            index = _index;
        }
        if (_length != undefined)
        {
            length = _length;
        }

        // Clamp values to array size
        if (index < 0)
        {
            length += index;
            index = 0;
        }
        if (index >= _array.length)
        {
            return;
        }
        if ((index + length) >= _array.length)
        {
            length = _array.length - index;
        }
        if (length <= 0)
        {
            return;
        }				

        if (length > 0)
        {
            var res = false;

            var end = index + length;
            for (var i = index; i < end; i++)
            {
                var entry = _array[i];

                if ((typeof (entry) == "object") && (entry.__type != undefined) && (entry.__type == "[weakref]"))
                {
                    var isalive = entry.IsRefAlive();
                    if (isalive == undefined)
                    {
                        return undefined;
                    }
                    else if (entry.IsRefAlive() == true)
                    {
                        res = true;
                    }                    
                }
                else
                {
                    return undefined;
                }                
            }

            return res;
        }
    }

    return undefined;
}