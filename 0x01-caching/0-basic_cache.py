#!/usr/bin/env python3
"""Basic caching module.
"""
BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """Basic Cache class that inherits from BaseCaching
    """
    def put(self, key, item):
        """Adds an item in the cache.
        """
        if key is None or item is None:
            return
        self.cache_data[key] = item

    def get(self, key):
        """Returns an item by key.
        """
        return self.cache_data.get(key, None)
