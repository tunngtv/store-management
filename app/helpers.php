<?php

if (!function_exists('flash')) {
  /**
   * Flash a message to the session.
   *
   * @param string $message
   * @param string $level
   * @return void
   */
  function flash(string $message, array $data = [], $type = 'success'): void
  {
    session()->flash('message', $message);
    session()->flash('type', $type);

    if (is_array($data)) {
      foreach ($data as $key => $value) {
        session()->flash($key, $value);
      }
    } else {
      session()->flash('data', $data);
    }
  }
}
